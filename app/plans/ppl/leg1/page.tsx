import { WorkoutOutlineTable } from "@/components/WorkoutPlan";
import { WorkoutCard } from "@/components/WorkoutCard";

export default function DayTwoLegsPage() {
  const dayTwoWorkouts = [
    {
      name: "Squats",
      mechanics: "Compound (Quads / Glutes)",
      sets: 3,
      reps: "5–8",
      equipment: "Barbell / Smith Machine",
      focus: "Lower Body Strength & Mass",
    },
    {
      name: "Bulgarian Split Squats",
      mechanics: "Compound (Unilateral)",
      sets: 3,
      reps: "8–12",
      equipment: "Dumbbells / Barbell",
      focus: "Glute & Quad Isolation / Stability",
    },
    {
      name: "Leg Extension",
      mechanics: "Isolation (Quads)",
      sets: 3,
      reps: "12–15",
      equipment: "Machine",
      focus: "Quad Peak Contraction",
    },
    {
      name: "Leg Curls",
      mechanics: "Isolation (Hamstrings)",
      sets: 3,
      reps: "10–15",
      equipment: "Seated / Lying Machine",
      focus: "Hamstring Stretch & Squeeze",
    },
    {
      name: "Seated / Standing Calf Raise",
      mechanics: "Isolation (Calves)",
      sets: 4,
      reps: "12–20",
      equipment: "Machine / Bodyweight",
      focus: "Full Stretch & Controlled Contraction",
    },
  ];

  const exercises = [
    {
      name: "Barbell Squats",
      description:
        "The king of leg exercises, building overall lower body strength, size, and athletic power.",
      keyPoints: [
        "Keep chest up and core braced.",
        "Push knees outward during descent.",
        "Go at least parallel for full quad activation.",
      ],
      alternatives: ["Smith Machine Squats", "Front Squats", "Hack Squats"],
      sets: "3 Working Sets",
      reps: "5–8 Reps",
      images: [{ src: "images/squat-1.webp" }, { src: "images/squat-2.gif" }],
    },

    {
      name: "Bulgarian Split Squats",
      description:
        "A powerful unilateral movement that builds quads and glutes while improving balance and correcting imbalances.",
      keyPoints: [
        "Keep front foot planted firmly.",
        "Drop straight down — don’t lean excessively.",
        "Drive through the heel to stand up.",
      ],
      alternatives: [
        "Rear Foot Elevated Split Squat",
        "Walking Lunges",
        "Step-Ups",
      ],
      sets: "3 Working Sets",
      reps: "8–12 Reps",
      images: [{ src: "images/bss-2.gif" }, { src: "images/bss-1.gif" }],
    },

    {
      name: "Leg Extension",
      description:
        "An isolation exercise that fully targets the quadriceps and enhances muscle definition.",
      keyPoints: [
        "Control the weight — avoid swinging.",
        "Pause briefly at full extension.",
        "Lower slowly to maintain tension.",
      ],
      alternatives: ["Single-Leg Extension", "Resistance Band Extension"],
      sets: "3 Working Sets",
      reps: "12–15 Reps",
      images: [{ src: "images/legext-1.gif" }, { src: "images/legext-2.gif" }],
    },

    {
      name: "Leg Curls (Seated / Lying)",
      description:
        "Direct hamstring movement focused on strengthening the back of the legs for balanced development.",
      keyPoints: [
        "Keep hips pressed into the seat/pad.",
        "Squeeze hamstrings at peak contraction.",
        "Control the eccentric portion.",
      ],
      alternatives: [
        "Romanian Deadlifts",
        "Cable Hamstring Curl",
        "Swiss Ball Leg Curl",
      ],
      sets: "3 Working Sets",
      reps: "10–15 Reps",
      images: [
        { src: "images/legcurl-1.gif" },
        { src: "images/legcurl-2.gif" },
      ],
    },

    {
      name: "Seated / Standing Calf Raises",
      description:
        "Targets the gastrocnemius and soleus muscles for complete calf development.",
      keyPoints: [
        "Lower heels fully for deep stretch.",
        "Pause briefly at the bottom.",
        "Explode upward and squeeze at top.",
      ],
      alternatives: [
        "Donkey Calf Raises",
        "Single-Leg Calf Raise",
        "Leg Press Calf Raise",
      ],
      sets: "4 Working Sets",
      reps: "12–20 Reps",
      images: [{ src: "images/calf-1.gif" }, { src: "images/calf-2.webp" }],
    },
  ];

  return (
    <>
      <WorkoutOutlineTable
        title="Day 2 — Legs"
        workouts={dayTwoWorkouts}
        note="Start heavy with squats, move to unilateral strength work, then finish with isolation and high-rep calf training."
      />

      <WorkoutCard
        title="Workout Form & Technique Guide"
        subtitle="Visual references and coaching cues for maximizing leg growth and strength."
        exercises={exercises}
      />
    </>
  );
}
