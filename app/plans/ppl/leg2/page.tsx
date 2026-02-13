import { WorkoutOutlineTable } from "@/components/WorkoutPlan";
import { WorkoutCard } from "@/components/WorkoutCard";

export default function DayFiveLegsVariationPage() {
  const dayFiveWorkouts = [
    {
      name: "Leg Press",
      mechanics: "Compound (Quads / Glutes)",
      sets: 3,
      reps: "8–12",
      equipment: "Leg Press Machine",
      focus: "Quad Mass & Controlled Depth",
    },
    {
      name: "Walking / Stationary Lunges",
      mechanics: "Compound (Unilateral)",
      sets: 3,
      reps: "10–12 each leg",
      equipment: "Dumbbells / Barbell",
      focus: "Glutes, Quads & Stability",
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
      name: "Leg Curl (Seated / Lying)",
      mechanics: "Isolation (Hamstrings)",
      sets: 3,
      reps: "10–15",
      equipment: "Machine",
      focus: "Hamstring Stretch & Squeeze",
    },
    {
      name: "Calf Raise (Seated / Standing)",
      mechanics: "Isolation (Calves)",
      sets: 4,
      reps: "12–20",
      equipment: "Machine / Bodyweight",
      focus: "Full Stretch & Strong Contraction",
    },
  ];

  const exercises = [
    {
      name: "Leg Press",
      description:
        "A powerful compound lower-body movement allowing heavy quad loading with controlled spinal stress.",
      keyPoints: [
        "Lower platform with control.",
        "Do not lock knees aggressively.",
        "Keep lower back flat against pad.",
      ],
      alternatives: [
        "Single-Leg Press",
        "Hack Squat Machine",
        "Smith Machine Squats",
      ],
      sets: "3 Working Sets",
      reps: "8–12 Reps",
      images: [
        { src: "images/legpress-2.webp" },
        { src: "images/legpress-2.gif" },
      ],
    },

    {
      name: "Walking / Stationary Lunges",
      description:
        "A unilateral leg builder that improves balance, glute activation, and overall leg symmetry.",
      keyPoints: [
        "Step forward with control.",
        "Keep torso upright.",
        "Drive through front heel.",
      ],
      alternatives: ["Reverse Lunges", "Bulgarian Split Squats", "Step-Ups"],
      sets: "3 Working Sets",
      reps: "10–12 Each Leg",
      images: [{ src: "images/lunges-1.gif" }, { src: "images/lunges-2.webp" }],
    },

    {
      name: "Leg Extension",
      description:
        "An isolation exercise to maximally fatigue the quadriceps and improve muscle definition.",
      keyPoints: [
        "Pause briefly at the top.",
        "Control the eccentric.",
        "Avoid using momentum.",
      ],
      alternatives: ["Single-Leg Extension", "Resistance Band Extensions"],
      sets: "3 Working Sets",
      reps: "12–15 Reps",
      images: [{ src: "images/legext-1.gif" }, { src: "images/legext-2.gif" }],
    },

    {
      name: "Leg Curl (Seated / Lying) / RDL",
      description:
        "Strengthens hamstrings to balance quad-dominant movements and protect the knees.",
      keyPoints: [
        "Keep hips pressed down.",
        "Squeeze at peak contraction.",
        "Control descent fully.",
      ],
      alternatives: ["Romanian Deadlift", "Cable Leg Curl", "Swiss Ball Curl"],
      sets: "3 Working Sets",
      reps: "10–15 Reps",
      images: [
        { src: "images/legcurl-1.gif" },
        { src: "images/legcurl-2.gif" },
      ],
    },

    {
      name: "Calf Raise (Seated / Standing)",
      description:
        "Targets both gastrocnemius and soleus muscles for complete calf development.",
      keyPoints: [
        "Lower heels fully for stretch.",
        "Pause briefly at bottom.",
        "Explode upward and squeeze.",
      ],
      alternatives: [
        "Donkey Calf Raise",
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
        title="Day 5 — Legs (Variation)"
        workouts={dayFiveWorkouts}
        note="Focus on controlled tempo and quad-dominant loading with leg press and lunges, followed by isolation work for balanced lower-body growth."
      />

      <WorkoutCard
        title="Workout Form & Technique Guide"
        subtitle="Visual references and coaching cues for maximizing leg hypertrophy and strength."
        exercises={exercises}
      />
    </>
  );
}
