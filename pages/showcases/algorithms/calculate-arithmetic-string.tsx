import type { NextPage } from "next";
import Head from "next/head";
import { Navigation } from "../../../src/common/components/Navigation/Navigation";
import { CodeEditor } from "../../../src/common/components/CodeEditor/CodeEditor";
import { ChangeEvent, useState } from "react";
import { XCircleIcon, CheckCircleIcon } from "@heroicons/react/outline";
import Spinner from "../../../public/spinner.svg";

const IsPalindrome: NextPage = () => {
  const [code, setCode] = useState(
    `function executeArithmeticExpression(value, secondValue, operator) {
    switch (operator) {
        case '+':
            return value + secondValue;
        case '-':
            return value - secondValue;
        case '*':
            return value * secondValue;
        case '/':
            return value / secondValue;
    } 

    throw new Error('Operation is not supported');
}

function calculate(s) {
    let result = 0;
    let operation = '+';
    let holdValue = '';
    for(let i = 0; i < s.length; i++) {
        let currentPointer = s[i];
        if (!isNaN(currentPointer)) {
            // Hold value if current pointer is number
            holdValue += s[i];
            continue;
        }
        
        if (!['+', '-', '*', '/'].includes(currentPointer)) {
            // Skip if arithmethic not supported
            continue;
        }
        
        result = executeArithmeticExpression(result, parseInt(holdValue), operation);
        holdValue = '';
        operation = currentPointer;
    }

    // Execute the last digit
    return holdValue !== '' ? executeArithmeticExpression(result, parseInt(holdValue), operation) : result;
}`,
  );
  const [checkData, setCheckData] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(0);
  const [isSubmitted, setSubmitted] = useState(false);
  const [isRunning, setRunning] = useState(false);

  const executeWorker = () => {
    const codeToExceute = `${code} postMessage(calculate('${checkData}'))`;
    let timerId: NodeJS.Timeout;

    const blob = new Blob([codeToExceute], {
      type: "text/javascript",
    });

    const blobUrl = URL.createObjectURL(blob);
    const worker = new Worker(blobUrl);

    worker.addEventListener("message", (e) => {
      setResult(e.data);
      setSubmitted(true);
      clearTimeout(timerId);
      setRunning(false);
    });

    // add a listener for errors from the Worker
    worker.addEventListener("error", (e) => {
      const string = e.message.toString();
      setError(string);
      setSubmitted(false);
      clearTimeout(timerId);
      setRunning(false);
    });

    timerId = setTimeout(() => {
      worker.terminate();
      setSubmitted(false);
      setError("Function is taking longer than 5 second");
      setRunning(false);
    }, 5000);
  };

  const handleClick = () => {
    setSubmitted(false);
    if (!checkData) return;
    setRunning(true);
    setError("");
    try {
      executeWorker();
    } catch (er: unknown) {
      if (er instanceof Error) {
        setError(er.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Adriansyah | Showcases - Algorithms - Basic calculator</title>
        <meta
          name="description"
          content="implementation of a way to execute basic arithmetic expression."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navigation />
      </header>
      <main className="bg-stone-100 flex-grow flex flex-col p-5">
        <header>
          <h2 className="mb-9 font-sans text-3xl text-center font-bold text-gray-800 underline underline-offset-8">
            Basic calculator
          </h2>
          <p className="text-center">
            This is implementation how calculate arithmetic expression from
            string.
          </p>
          <p className="text-center">
            <strong>NOTE:</strong>
            <em> Do not change the function name</em>
          </p>
          <p className="text-center">
            <strong>NOTE:</strong>
            <em> WIP It still doesn&apos;t take precedence propertly</em>
          </p>
        </header>
        <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-5">
          <div>
            <CodeEditor
              value={code}
              language="js"
              placeholder="Please enter JS code."
              onChange={(evn: ChangeEvent<HTMLTextAreaElement>) =>
                setCode(evn.target.value)
              }
              padding={15}
              style={{
                fontSize: 12,
                backgroundColor: "white",
                fontFamily:
                  "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
              }}
            />
          </div>
          <div className="overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="input"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Input
                  </label>
                  <input
                    type="text"
                    name="input"
                    id="input"
                    placeholder="20+3"
                    value={checkData}
                    onChange={(e) => {
                      setSubmitted(false);
                      setCheckData(e.target.value);
                    }}
                    className="px-3 py-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-500 rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-4">
                  {isSubmitted && (
                    <>
                      <strong>{checkData}</strong> = {result}
                    </>
                  )}
                  {error.length > 0 && (
                    <p>
                      <span className="font-bold text-red-600">Error:</span>{" "}
                      {error}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                disabled={isRunning}
                onClick={handleClick}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isRunning && (
                  <Spinner className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                )}
                Submit
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IsPalindrome;
