import { WorkoutOutlineTable } from "@/components/WorkoutPlan";
import { WorkoutCard } from "@/components/WorkoutCard";

export default function DayOnePushPage() {
  const dayOneWorkouts = [
    {
      name: "Bench Press (Any Variation)",
      mechanics: "Compound (Chest)",
      sets: 3,
      reps: "6–10",
      equipment: "Barbell / Dumbbells / Machine",
      focus: "Chest Thickness / Progressive Overload",
    },
    {
      name: "Fly (Pec Deck / Cable Fly)",
      mechanics: "Isolation (Chest)",
      sets: 3,
      reps: "10–15",
      equipment: "Machine / Cable",
      focus: "Chest Stretch & Squeeze",
    },
    {
      name: "Lateral Raises (Cable / Dumbbell)",
      mechanics: "Isolation (Side Delts)",
      sets: 3,
      reps: "12–15",
      equipment: "Cable / Dumbbells",
      focus: "Shoulder Width / Controlled Form",
    },
    {
      name: "Skull Crushers (EZ Bar / Cable)",
      mechanics: "Isolation (Triceps)",
      sets: 3,
      reps: "8–12",
      equipment: "EZ Bar / Cable",
      focus: "Long Head Emphasis",
    },
    {
      name: "Shoulder Press",
      mechanics: "Compound (Shoulders)",
      sets: 3,
      reps: "6–10",
      equipment: "Barbell / Dumbbells / Machine",
      focus: "Front Delts Strength & Mass",
    },
    {
      name: "Triceps Pushdown",
      mechanics: "Isolation (Triceps)",
      sets: 3,
      reps: "10–15",
      equipment: "Cable Machine",
      focus: "Lateral Head / Lockout Control",
    },
  ];

  const exercises = [
    {
      name: "Bench Press (Flat / Incline)",
      description:
        "A primary chest compound movement focused on building pressing strength and upper body mass. Avoid decline variation.",
      keyPoints: [
        "Retract and depress shoulder blades.",
        "Control the bar down to mid-chest.",
        "Drive through heels and press explosively.",
      ],
      alternatives: [
        "Flat Barbell Bench Press",
        "Incline Dumbbell Press",
        "Machine Chest Press",
        "Smith Machine Press",
      ],
      sets: "3 Working Sets",
      reps: "6–10 Reps",
      images: [
        { src: "images/flat-bench-2.gif" },
        { src: "images/incline-bench-2.gif" },
      ],
    },

    {
      name: "Pec Deck / Cable Fly",
      description:
        "Isolation movement for deep chest stretch and strong contraction without heavy joint stress.",
      keyPoints: [
        "Keep slight bend in elbows.",
        "Stretch fully without overstressing shoulders.",
        "Pause and squeeze at peak contraction.",
      ],
      alternatives: ["Cable Crossover", "Incline Dumbbell Fly", "Machine Fly"],
      sets: "3 Working Sets",
      reps: "10–15 Reps",
      images: [
        { src: "images/pec-dec-fly.gif" },
        { src: "images/cable-crossover-2.gif" },
      ],
    },

    {
      name: "Lateral Raises (Cable / Dumbbell)",
      description:
        "Builds shoulder width by isolating the medial deltoid for capped shoulders.",
      keyPoints: [
        "Lead with elbows, not hands.",
        "Lift to shoulder height only.",
        "Avoid swinging — use strict form.",
      ],
      alternatives: [
        "Single Arm Cable Lateral Raise",
        "Seated Dumbbell Lateral Raise",
        "Machine Lateral Raise",
      ],
      sets: "3 Working Sets",
      reps: "12–15 Reps",
      images: [
        { src: "images/cablelr-1.gif" },
        { src: "images/cablelr-2.webp" },
      ],
    },

    {
      name: "Skull Crushers (EZ Bar / Cable)",
      description:
        "Targets the long head of the triceps for arm thickness and pressing strength support.",
      keyPoints: [
        "Keep elbows fixed and pointing up.",
        "Lower bar behind head for better stretch.",
        "Control the eccentric to protect elbows.",
      ],
      alternatives: [
        "Cable Skull Crushers",
        "Dumbbell Skull Crushers",
        "PJR Pullovers",
      ],
      sets: "3 Working Sets",
      reps: "8–12 Reps",
      images: [
        { src: "images/skullcrusher-1.gif" },
        { src: "images/skullcrusher-2.gif" },
      ],
    },

    {
      name: "Shoulder Press",
      description:
        "A compound shoulder movement that builds strength and mass in the front and side delts.",
      keyPoints: [
        "Brace core and avoid lower back arch.",
        "Press straight overhead.",
        "Lower under control to shoulder level.",
      ],
      alternatives: [
        "Dumbbell Shoulder Press",
        "Barbell Overhead Press",
        "Machine Shoulder Press",
      ],
      sets: "3 Working Sets",
      reps: "6–10 Reps",
      images: [{ src: "images/ohp-2.gif" }, { src: "images/dbpress-2.gif" }],
    },

    {
      name: "Triceps Pushdown",
      description:
        "A staple cable movement focusing on tricep lockout strength and lateral head development.",
      keyPoints: [
        "Keep elbows pinned to sides.",
        "Push down in a controlled arc.",
        "Squeeze hard at full extension.",
      ],
      alternatives: [
        "Rope Pushdown",
        "Reverse Grip Pushdown",
        "Single Arm Pushdown",
      ],
      sets: "3 Working Sets",
      reps: "10–15 Reps",
      images: [
        { src: "images/pushdown-1.gif" },
        { src: "images/pushdown-2.webp" },
      ],
    },
  ];

  return (
    <>
      <WorkoutOutlineTable
        title="Day 1 — Chest + Shoulders + Triceps"
        workouts={dayOneWorkouts}
        note="Focus on progressive overload in bench and shoulder press. Use isolation movements to maximize pump and muscle activation."
      />

      <WorkoutCard
        title="Workout Form & Technique Guide"
        subtitle="Visual references and key coaching cues for mastering push-day exercises."
        exercises={exercises}
      />
    </>
  );
}
