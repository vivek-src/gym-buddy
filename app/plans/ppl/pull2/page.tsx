import { WorkoutOutlineTable } from "@/components/WorkoutPlan";
import { WorkoutCard } from "@/components/WorkoutCard";

export default function DaySixBackVariationPage() {
  const daySixWorkouts = [
    {
      name: "Lat Pulldown",
      mechanics: "Compound (Lats / Upper Back)",
      sets: 3,
      reps: "8–12",
      equipment: "Cable Machine",
      focus: "Back Width & Lat Activation",
    },
    {
      name: "Cable Row / Barbell Bent-Over Row",
      mechanics: "Compound (Mid Back)",
      sets: 3,
      reps: "6–10",
      equipment: "Cable Machine / Barbell",
      focus: "Back Thickness & Strength",
    },
    {
      name: "Cable Back Pullover",
      mechanics: "Isolation (Lats)",
      sets: 3,
      reps: "10–15",
      equipment: "Cable Machine",
      focus: "Lat Stretch & Mind-Muscle Connection",
    },
    {
      name: "Preacher Curl",
      mechanics: "Isolation (Biceps)",
      sets: 3,
      reps: "8–12",
      equipment: "EZ Bar / Machine",
      focus: "Peak Contraction",
    },
    {
      name: "Incline Dumbbell Curl",
      mechanics: "Isolation (Biceps Long Head)",
      sets: 3,
      reps: "8–12",
      equipment: "Dumbbells",
      focus: "Deep Stretch & Peak Shape",
    },
    {
      name: "Hammer Curl",
      mechanics: "Isolation (Brachialis / Forearms)",
      sets: 3,
      reps: "8–12",
      equipment: "Dumbbells / Rope",
      focus: "Arm Thickness",
    },
    {
      name: "Barbell / Dumbbell Shrugs",
      mechanics: "Isolation (Traps)",
      sets: 3,
      reps: "10–15",
      equipment: "Barbell / Dumbbells",
      focus: "Upper Trap Development",
    },
  ];

  const exercises = [
    {
      name: "Lat Pulldown",
      description:
        "A vertical pulling movement that builds lat width and improves upper back strength.",
      keyPoints: [
        "Pull elbows toward hips.",
        "Avoid leaning excessively backward.",
        "Control the eccentric phase.",
      ],
      alternatives: ["Pull-Ups", "Neutral Grip Pulldown", "Assisted Pull-Ups"],
      sets: "3 Working Sets",
      reps: "8–12 Reps",
      images: [
        { src: "images/latpulldown-1.gif" },
        { src: "images/latpulldown-2.webp" },
      ],
    },

    {
      name: "Cable Row / Barbell Bent-Over Row",
      description:
        "A horizontal pulling movement focused on mid-back thickness and overall pulling strength.",
      keyPoints: [
        "Keep spine neutral.",
        "Pull elbows behind torso.",
        "Squeeze shoulder blades together.",
      ],
      alternatives: [
        "Chest Supported Row",
        "T-Bar Row",
        "Single Arm Cable Row",
      ],
      sets: "3 Working Sets",
      reps: "6–10 Reps",
      images: [
        { src: "images/cablerow-1.gif" },
        { src: "images/bbrow-1.webp" },
      ],
    },

    {
      name: "Cable Back Pullover",
      description:
        "An isolation lat movement emphasizing stretch and controlled contraction without heavy elbow flexion.",
      keyPoints: [
        "Keep arms slightly bent.",
        "Pull bar toward thighs.",
        "Maintain constant tension.",
      ],
      alternatives: ["Dumbbell Pullover", "Straight Arm Pulldown"],
      sets: "3 Working Sets",
      reps: "10–15 Reps",
      images: [
        { src: "images/pullover-1.gif" },
        { src: "images/pullover-2.webp" },
      ],
    },

    {
      name: "Preacher Curl",
      description:
        "Strict bicep movement isolating the lower and mid portion of the biceps.",
      keyPoints: [
        "Keep upper arms fixed on pad.",
        "Lower slowly.",
        "Squeeze at top without swinging.",
      ],
      alternatives: ["Machine Preacher Curl", "Cable Preacher Curl"],
      sets: "3 Working Sets",
      reps: "8–12 Reps",
      images: [
        { src: "images/preacher-1.gif" },
        { src: "images/preacher-2.webp" },
      ],
    },

    {
      name: "Incline Dumbbell Curl",
      description:
        "Places the long head of the biceps under stretch for enhanced peak development.",
      keyPoints: [
        "Let arms hang behind torso.",
        "Keep elbows stable.",
        "Avoid swinging.",
      ],
      alternatives: ["Bayesian Cable Curl", "Seated Dumbbell Curl"],
      sets: "3 Working Sets",
      reps: "8–12 Reps",
      images: [
        { src: "images/incline-curl-1.gif" },
        { src: "images/incline-curl-2.webp" },
      ],
    },

    {
      name: "Hammer Curl",
      description:
        "Targets the brachialis and forearms to add arm thickness and improve overall arm appearance.",
      keyPoints: [
        "Keep palms neutral.",
        "Control the lift.",
        "Squeeze at top.",
      ],
      alternatives: ["Rope Hammer Curl", "Cross Body Hammer Curl"],
      sets: "3 Working Sets",
      reps: "8–12 Reps",
      images: [{ src: "images/hammer-1.webp" }, { src: "images/hammer-2.gif" }],
    },

    {
      name: "Shrugs",
      description:
        "Develops upper trapezius muscles, improving upper back thickness and posture.",
      keyPoints: [
        "Lift shoulders straight up.",
        "Avoid rolling shoulders.",
        "Pause briefly at top.",
      ],
      alternatives: ["Dumbbell Shrugs", "Smith Machine Shrugs"],
      sets: "3 Working Sets",
      reps: "10–15 Reps",
      images: [{ src: "images/shrugs-1.gif" }, { src: "images/shrugs-2.webp" }],
    },
  ];

  return (
    <>
      <WorkoutOutlineTable
        title="Day 6 — Back + Biceps (Variation)"
        workouts={daySixWorkouts}
        note="Emphasize back width first, then thickness, followed by focused bicep isolation and trap development."
      />

      <WorkoutCard
        title="Workout Form & Technique Guide"
        subtitle="Visual references and coaching cues for maximizing back and arm growth."
        exercises={exercises}
      />
    </>
  );
}
