import { WorkoutOutlineTable } from "@/components/WorkoutPlan";
import { WorkoutCard } from "@/components/WorkoutCard";

export default function DayFourPushVariationPage() {
  const dayFourWorkouts = [
    {
      name: "Bench Press (Opposite Variation of Day 1)",
      mechanics: "Compound (Chest)",
      sets: 3,
      reps: "6–10",
      equipment: "Barbell / Dumbbells / Machine",
      focus: "Balanced Chest Development",
    },
    {
      name: "Fly (Opposite Variation of Day 1)",
      mechanics: "Isolation (Chest)",
      sets: 3,
      reps: "10–15",
      equipment: "Cable / Pec Deck Machine",
      focus: "Stretch & Peak Contraction",
    },
    {
      name: "Lateral Raises (DB / Cable)",
      mechanics: "Isolation (Side Delts)",
      sets: 3,
      reps: "12–15",
      equipment: "Dumbbells / Cable",
      focus: "Shoulder Width & Control",
    },
    {
      name: "Skull Crushers (Cable / EZ Bar)",
      mechanics: "Isolation (Triceps)",
      sets: 3,
      reps: "8–12",
      equipment: "EZ Bar / Cable",
      focus: "Long Head Emphasis",
    },
    {
      name: "Reverse Fly (Rear Delt)",
      mechanics: "Isolation (Rear Delts)",
      sets: 3,
      reps: "12–15",
      equipment: "Cable / Pec Deck (Reverse)",
      focus: "Shoulder Balance & Posture",
    },
  ];

  const exercises = [
    {
      name: "Bench Press (Flat / Incline Variation)",
      description:
        "Perform the opposite variation from Day 1 to ensure complete chest development and avoid strength plateaus.",
      keyPoints: [
        "Retract shoulder blades before pressing.",
        "Lower bar with control.",
        "Drive explosively without bouncing.",
      ],
      alternatives: [
        "Flat Barbell Bench Press",
        "Incline Dumbbell Press",
        "Smith Machine Press",
      ],
      sets: "3 Working Sets",
      reps: "6–10 Reps",
      images: [
        { src: "images/incline-bench-3.gif" },
        { src: "images/Machine-Press-2.gif" },
      ],
    },

    {
      name: "Cable Fly / Pec Deck",
      description:
        "Use the opposite variation from Push Day 1 (Cable Fly ↔ Pec Deck) to change resistance angle and maximize overall chest fiber activation.",
      keyPoints: [
        "Keep slight elbow bend.",
        "Stretch fully but safely.",
        "Pause and squeeze at peak contraction.",
      ],
      alternatives: [
        "Incline Cable Fly",
        "Machine Fly",
        "Low-to-High Cable Fly",
      ],
      sets: "3 Working Sets",
      reps: "10–15 Reps",
      images: [
        { src: "images/cable-crossover-2.gif" },
        { src: "images/pec-dec-fly.gif" },
      ],
    },

    {
      name: "Lateral Raises (DB / Cable)",
      description:
        "Builds shoulder width by isolating the medial deltoid for balanced shoulder development.",
      keyPoints: [
        "Lead with elbows.",
        "Raise only to shoulder height.",
        "Avoid using momentum.",
      ],
      alternatives: [
        "Single Arm Cable Raise",
        "Seated DB Lateral Raise",
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
      name: "Skull Crushers (Cable / EZ Bar)",
      description:
        "Targets the long head of the triceps for arm thickness and improved pressing power.",
      keyPoints: [
        "Keep elbows fixed upward.",
        "Lower behind head for deeper stretch.",
        "Control the eccentric phase.",
      ],
      alternatives: [
        "Overhead Cable Extension",
        "DB Skull Crushers",
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
      name: "Reverse Fly (Rear Delt)",
      description:
        "Strengthens the rear delts, improves posture, and balances heavy pressing movements.",
      keyPoints: [
        "Keep chest supported if possible.",
        "Move arms in wide arc.",
        "Avoid shrugging shoulders.",
      ],
      alternatives: ["Cable Rear Delt Fly", "Face Pulls", "Reverse Pec Deck"],
      sets: "3 Working Sets",
      reps: "12–15 Reps",
      images: [
        { src: "images/reversecable-1.gif" },
        { src: "images/reversecable-2.gif" },
      ],
    },
  ];

  return (
    <>
      <WorkoutOutlineTable
        title="Day 4 — Push (Chest + Shoulders + Triceps Variation)"
        workouts={dayFourWorkouts}
        note="Use opposite variations from Day 1 to ensure complete chest development and balanced shoulder and tricep growth."
      />

      <WorkoutCard
        title="Workout Form & Technique Guide"
        subtitle="Visual references and coaching cues for maximizing push-day performance and muscle growth."
        exercises={exercises}
      />
    </>
  );
}
