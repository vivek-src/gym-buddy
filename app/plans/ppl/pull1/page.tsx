import { WorkoutOutlineTable } from "@/components/WorkoutPlan";
import { WorkoutCard } from "@/components/WorkoutCard";

export default function DayThreeBackBicepsPage() {
  const dayThreeWorkouts = [
    {
      name: "Lat Pulldown",
      mechanics: "Compound (Lats / Upper Back)",
      sets: 3,
      reps: "8–12",
      equipment: "Cable Machine",
      focus: "Back Width & Lat Activation",
    },
    {
      name: "T-Bar Row (Machine)",
      mechanics: "Compound (Mid Back)",
      sets: 3,
      reps: "6–10",
      equipment: "T-Bar Row Machine",
      focus: "Back Thickness & Strength",
    },
    {
      name: "Single Arm Dumbbell Row",
      mechanics: "Compound (Lats / Mid Back)",
      sets: 3,
      reps: "8–12",
      equipment: "Dumbbell",
      focus: "Unilateral Lat Stretch & Balance",
    },
    {
      name: "Back Extension (Optional)",
      mechanics: "Isolation (Lower Back / Glutes)",
      sets: 2,
      reps: "12–15",
      equipment: "Hyperextension Bench",
      focus: "Lower Back Strength & Stability",
    },
    {
      name: "Barbell Curl",
      mechanics: "Isolation (Biceps)",
      sets: 3,
      reps: "6–10",
      equipment: "Barbell / EZ Bar",
      focus: "Overall Bicep Mass",
    },
    {
      name: "Preacher Curl + DB Hammer Curl (Superset)",
      mechanics: "Isolation (Biceps / Brachialis)",
      sets: 3,
      reps: "8–12 each",
      equipment: "EZ Bar / Dumbbells",
      focus: "Peak + Arm Thickness Finisher",
    },
  ];

  const exercises = [
    {
      name: "Lat Pulldown",
      description:
        "A foundational vertical pulling movement that develops lat width and improves upper body pulling strength.",
      keyPoints: [
        "Pull elbows down toward hips.",
        "Avoid excessive leaning back.",
        "Control the eccentric fully.",
      ],
      alternatives: ["Pull-Ups", "Assisted Pull-Ups", "Neutral Grip Pulldown"],
      sets: "3 Working Sets",
      reps: "8–12 Reps",
      images: [{ src: "images/latpd-2.gif" }, { src: "images/latpd-3.gif" }],
    },

    {
      name: "T-Bar Row (Machine)",
      description:
        "A heavy rowing movement that builds mid-back thickness and overall pulling strength.",
      keyPoints: [
        "Keep chest supported if using machine.",
        "Drive elbows back, not upward.",
        "Squeeze shoulder blades together.",
      ],
      alternatives: ["Barbell Rows", "Chest Supported Row", "Seated Cable Row"],
      sets: "3 Working Sets",
      reps: "6–10 Reps",
      images: [{ src: "images/dbrow-2.gif" }, { src: "images/tbar-1.png" }],
    },

    {
      name: "Single Arm Dumbbell Row",
      description:
        "A unilateral back movement that enhances lat stretch, improves symmetry, and increases mind-muscle connection.",
      keyPoints: [
        "Keep back flat and core tight.",
        "Pull elbow toward hip.",
        "Avoid twisting torso excessively.",
      ],
      alternatives: ["Kroc Rows", "Cable Single Arm Row", "Meadows Row"],
      sets: "3 Working Sets",
      reps: "8–12 Reps",
      images: [{ src: "images/dbrow-1.gif" }, { src: "images/dbrow.gif" }],
    },

    {
      name: "Back Extension",
      description:
        "Strengthens the lower back and posterior chain, improving overall stability and injury resistance.",
      keyPoints: [
        "Maintain neutral spine.",
        "Avoid hyperextending at top.",
        "Control movement throughout.",
      ],
      alternatives: [
        "Romanian Deadlift",
        "Good Mornings",
        "Reverse Hyperextension",
      ],
      sets: "2–3 Working Sets",
      reps: "12–15 Reps",
      images: [{ src: "images/backext.gif" }, { src: "images/backext-2.gif" }],
    },

    {
      name: "Barbell / Dumbbell Curl",
      description:
        "A heavy bicep movement ideal for building overall arm mass and strength.",
      keyPoints: [
        "Keep elbows close to torso.",
        "Avoid swinging body.",
        "Lower weight slowly.",
      ],
      alternatives: ["EZ Bar Curl", "Cable Curl", "Standing Dumbbell Curl"],
      sets: "3 Working Sets",
      reps: "6–10 Reps",
      images: [{ src: "images/bbcurl-1.gif" }, { src: "images/bbcurl-2.gif" }],
    },

    {
      name: "Preacher Curl + DB Hammer Curl (Superset)",
      description:
        "A powerful finishing superset combining peak contraction (preacher) and brachialis thickness (hammer curls).",
      keyPoints: [
        "Perform preacher curls strictly.",
        "Move directly into hammer curls.",
        "Minimize rest between supersets.",
      ],
      alternatives: [
        "Machine Preacher Curl",
        "Rope Hammer Curl",
        "Cross Body Hammer Curl",
      ],
      sets: "3 Supersets",
      reps: "8–12 Reps Each",
      images: [
        { src: "images/preacher-1.gif" },
        { src: "images/hammer-1.webp" },
      ],
    },
  ];

  return (
    <>
      <WorkoutOutlineTable
        title="Day 3 — Back + Biceps"
        workouts={dayThreeWorkouts}
        note="Prioritize compound pulling movements first for strength and thickness, then finish with heavy curls and high-intensity supersets."
      />

      <WorkoutCard
        title="Workout Form & Technique Guide"
        subtitle="Visual references and coaching cues for maximizing back development and arm growth."
        exercises={exercises}
      />
    </>
  );
}
