import React from "react";

function SubmittedDialog({ setsubmitted, loading }) {
  return (
    <div className="flex min-h-[500px] w-full flex-col items-center justify-center gap-6">
      <img src="/animatedIcon.gif" alt="animated icon" height={70} width={70} />
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center gap-6">
            <p className="font-pm font-bol text-center text-4xl leading-7 smaller:text-2xl">
              Review Sent
            </p>
            <p className="text-1xl font-pm font-reg text-center leading-[20px] text-gray-500 smaller:text-[0.9rem]">
              Your Request submitted successfully
              <br />
              There are many variations earth.
            </p>
          </div>
          <p
            onClick={() => setsubmitted(false)}
            className={`font-pm font-bol mt-4 cursor-pointer text-[1.1rem] text-gray-700 [text-decoration:underline]`}
          >
            Got it.
          </p>
        </>
      )}
    </div>
  );
}

export default SubmittedDialog;

function Loading() {
  return (
    <div className="mt-10 flex gap-2">
      <div class="h-5 w-5 animate-bounce rounded-full bg-pmRed [animation-delay:-0.3s]"></div>
      <div class="h-5 w-5 animate-bounce rounded-full bg-pmRed [animation-delay:-0.15s]"></div>
      <div class="h-5 w-5 animate-bounce rounded-full bg-pmRed"></div>
    </div>
  );
}
