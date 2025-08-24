"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";
import { Progress } from "@/components/ui/progress";

function CandidateFeedbackDialog({ candidate }) {
  // Parse JSON string feedback → convert to object
  const parsedFeedback = candidate?.feedback
    ? JSON.parse(candidate.feedback)
    : null;

  return (
    <Dialog>
      <DialogTrigger>
        <EyeIcon className="h-6 w-6 text-primary" />
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[600px] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-green-700">
            Candidate Feedback
          </DialogTitle>
          <DialogDescription>
            Here is the detailed feedback for{" "}
            <span className="font-semibold">{candidate?.name}</span>.
          </DialogDescription>
        </DialogHeader>

        {parsedFeedback ? (
          <div className="mt-4 space-y-6">
            {/* Ratings */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Ratings</h3>
              <div className="space-y-4">
                <div>
                  <h2 className="flex justify-between">
                    Technical Skills{" "}
                    <span>{parsedFeedback?.technical_skills}/10</span>
                  </h2>
                  <Progress
                    value={parsedFeedback?.technical_skills * 10}
                    className="mt-1"
                  />
                </div>

                <div>
                  <h2 className="flex justify-between">
                    Problem Solving{" "}
                    <span>{parsedFeedback?.problem_solving}/10</span>
                  </h2>
                  <Progress
                    value={parsedFeedback?.problem_solving * 10}
                    className="mt-1"
                  />
                </div>

                <div>
                  <h2 className="flex justify-between">
                    Communication{" "}
                    <span>{parsedFeedback?.communication}/10</span>
                  </h2>
                  <Progress
                    value={parsedFeedback?.communication * 10}
                    className="mt-1"
                  />
                </div>

                <div>
                  <h2 className="flex justify-between">
                    Experience <span>{parsedFeedback?.experience}/10</span>
                  </h2>
                  <Progress
                    value={parsedFeedback?.experience * 10}
                    className="mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Performance Summary */}
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Performance Summary
              </h3>
              <div className="p-5 bg-secondary rounded-md">
                <p>{parsedFeedback?.performance_summary}</p>
              </div>
            </div>

            {/* Recommendation */}
            <div
              className={`p-5 flex items-center justify-between rounded-md ${
                parsedFeedback?.recommendation === "No"
                  ? "bg-red-100"
                  : "bg-green-100"
              }`}
            >
              <div>
                <h2
                  className={`font-bold ${
                    parsedFeedback?.recommendation === "No"
                      ? "text-red-700"
                      : "text-green-700"
                  }`}
                >
                  Recommendation Msg:
                </h2>
                <p
                  className={`${
                    parsedFeedback?.recommendation === "No"
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {parsedFeedback?.recommendation_message}
                </p>
              </div>
              <Button
                className={`${
                  parsedFeedback?.recommendation === "No"
                    ? "bg-red-700"
                    : "bg-green-700"
                }`}
              >
                Send Message
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-red-500">⚠️ No feedback available.</p>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default CandidateFeedbackDialog;
