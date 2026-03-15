export type Exercise = {
  name: string;
  sets: number;
  reps: string;
  description: string;
};

export type MuscleGroup = {
  id: string;
  name: string;
  icon: string;
  exercises: Exercise[];
};

export const muscleGroups: MuscleGroup[] = [
  {
    id: 'full-body',
    name: 'Full Body',
    icon: '🏋️',
    exercises: [
      { name: 'Deadlift', sets: 4, reps: '6-8', description: 'Lift barbell from ground to hip level with a flat back.' },
      { name: 'Clean and Press', sets: 3, reps: '6-8', description: 'Lift barbell to shoulders, then press overhead.' },
      { name: 'Thrusters', sets: 3, reps: '10-12', description: 'Front squat into an overhead press in one fluid motion.' },
      { name: 'Burpees', sets: 3, reps: '12-15', description: 'Drop to a push-up, jump back up, and repeat.' },
      { name: 'Turkish Get-Up', sets: 3, reps: '5 each side', description: 'Rise from lying to standing while holding a weight overhead.' },
      { name: 'Snatch', sets: 4, reps: '4-6', description: 'Lift barbell from ground to overhead in one explosive movement.' },
    ],
  },
  {
    id: 'abs',
    name: 'Abs',
    icon: '🔥',
    exercises: [
      { name: 'Plank', sets: 3, reps: '30-60 sec', description: 'Hold a push-up position with a straight body.' },
      { name: 'Hanging Leg Raise', sets: 3, reps: '10-15', description: 'Hang from a bar and raise legs to a 90-degree angle.' },
      { name: 'Weighted Crunches', sets: 3, reps: '15-20', description: 'Perform crunches while holding a weight on your chest.' },
      { name: 'Russian Twist', sets: 3, reps: '20 total', description: 'Sit with legs raised and rotate torso side to side with a weight.' },
      { name: 'Ab Wheel Rollout', sets: 3, reps: '10-12', description: 'Kneel and roll an ab wheel forward, then pull back.' },
      { name: 'Cable Woodchopper', sets: 3, reps: '12 each side', description: 'Rotate torso diagonally while pulling a cable from high to low.' },
    ],
  },
  {
    id: 'triceps',
    name: 'Triceps',
    icon: '💪',
    exercises: [
      { name: 'Tricep Dips', sets: 3, reps: '8-12', description: 'Lower and raise your body on parallel bars, focusing on triceps.' },
      { name: 'Triceps Rope Pushdown', sets: 3, reps: '10-15', description: 'Push a rope attachment down on a cable machine.' },
      { name: 'Skull Crushers', sets: 3, reps: '8-12', description: 'Lying on a bench, lower a barbell to your forehead and extend.' },
      { name: 'Close-Grip Bench Press', sets: 4, reps: '8-10', description: 'Bench press with hands shoulder-width apart to target triceps.' },
      { name: 'Overhead Triceps Extension', sets: 3, reps: '10-12', description: 'Hold a dumbbell overhead and lower it behind your head.' },
      { name: 'Tricep Kickbacks', sets: 3, reps: '12-15', description: 'Bend forward and extend a dumbbell behind you.' },
    ],
  },
  {
    id: 'back',
    name: 'Back',
    icon: '🔙',
    exercises: [
      { name: 'Pull-Ups', sets: 4, reps: '6-10', description: 'Hang from a bar and pull yourself up until your chin clears it.' },
      { name: 'Barbell Row', sets: 4, reps: '8-10', description: 'Bend over and row a barbell toward your lower chest.' },
      { name: 'Lat Pulldown', sets: 3, reps: '10-12', description: 'Pull a wide bar down to your chest on a cable machine.' },
      { name: 'Seated Cable Row', sets: 3, reps: '10-12', description: 'Pull a cable handle toward your midsection while seated.' },
      { name: 'T-Bar Row', sets: 3, reps: '8-10', description: 'Row a loaded T-bar toward your chest while bent over.' },
      { name: 'Face Pull', sets: 3, reps: '12-15', description: 'Pull a rope cable toward your face to target upper back and rear delts.' },
    ],
  },
  {
    id: 'quadriceps',
    name: 'Quadriceps',
    icon: '🦵',
    exercises: [
      { name: 'Barbell Squat', sets: 4, reps: '6-10', description: 'Place barbell on upper back, squat down and drive up.' },
      { name: 'Leg Press', sets: 4, reps: '10-12', description: 'Push a weighted platform away using your legs.' },
      { name: 'Walking Lunges', sets: 3, reps: '12 each leg', description: 'Step forward into a lunge, alternate legs while walking.' },
      { name: 'Bulgarian Split Squat', sets: 3, reps: '10 each leg', description: 'Squat on one leg with rear foot elevated on a bench.' },
      { name: 'Leg Extension', sets: 3, reps: '12-15', description: 'Extend your legs on a machine to target the quadriceps.' },
      { name: 'Goblet Squat', sets: 3, reps: '12-15', description: 'Hold a dumbbell at chest level and squat down.' },
    ],
  },
  {
    id: 'hamstrings',
    name: 'Hamstrings',
    icon: '🦿',
    exercises: [
      { name: 'Romanian Deadlift', sets: 4, reps: '8-10', description: 'Hinge at the hips with a barbell, keeping legs slightly bent.' },
      { name: 'Leg Curl', sets: 3, reps: '10-12', description: 'Curl your legs on a machine to target the hamstrings.' },
      { name: 'Good Mornings', sets: 3, reps: '10-12', description: 'With a barbell on your back, hinge forward at the hips.' },
      { name: 'Glute-Ham Raise', sets: 3, reps: '8-10', description: 'On a GHD bench, lower your torso and curl back up.' },
      { name: 'Nordic Hamstring Curl', sets: 3, reps: '6-8', description: 'Kneel and slowly lower your body forward, then curl back up.' },
    ],
  },
  {
    id: 'forearms',
    name: 'Forearms',
    icon: '🤜',
    exercises: [
      { name: 'Wrist Curl', sets: 3, reps: '15-20', description: 'Rest forearms on a bench and curl a barbell with your wrists.' },
      { name: 'Reverse Wrist Curl', sets: 3, reps: '15-20', description: 'Same as wrist curl but with palms facing down.' },
      { name: "Farmer's Carry", sets: 3, reps: '40-60 sec', description: 'Walk while holding heavy dumbbells at your sides.' },
      { name: 'Plate Pinch Hold', sets: 3, reps: '20-30 sec', description: 'Pinch two weight plates together and hold.' },
    ],
  },
  {
    id: 'chest',
    name: 'Chest',
    icon: '🫁',
    exercises: [
      { name: 'Flat Bench Press', sets: 4, reps: '6-10', description: 'Lie on a flat bench and press a barbell upward.' },
      { name: 'Incline Dumbbell Press', sets: 3, reps: '8-12', description: 'Press dumbbells on an incline bench to target upper chest.' },
      { name: 'Chest Fly', sets: 3, reps: '10-12', description: 'Open and close your arms with dumbbells in an arc motion.' },
      { name: 'Push-Up', sets: 3, reps: '15-20', description: 'Lower and push your body up from the floor.' },
      { name: 'Pec Deck Machine', sets: 3, reps: '12-15', description: 'Bring the pads together on a machine to squeeze your chest.' },
      { name: 'Decline Bench Press', sets: 3, reps: '8-10', description: 'Press a barbell on a decline bench to target lower chest.' },
    ],
  },
  {
    id: 'biceps',
    name: 'Biceps',
    icon: '💪',
    exercises: [
      { name: 'Barbell Curl', sets: 4, reps: '8-12', description: 'Curl a barbell toward your shoulders while standing.' },
      { name: 'Hammer Curl', sets: 3, reps: '10-12', description: 'Curl dumbbells with a neutral grip to target the brachialis.' },
      { name: 'Preacher Curl', sets: 3, reps: '10-12', description: 'Curl on a preacher bench for isolated bicep contraction.' },
      { name: 'Concentration Curl', sets: 3, reps: '10-12', description: 'Sit and curl a dumbbell with your elbow braced on your thigh.' },
      { name: 'Cable Curl', sets: 3, reps: '12-15', description: 'Curl a cable bar from a low pulley position.' },
      { name: 'Chin-Up', sets: 3, reps: '6-10', description: 'Pull yourself up on a bar with an underhand grip.' },
    ],
  },
  {
    id: 'shoulders',
    name: 'Shoulders',
    icon: '🙌',
    exercises: [
      { name: 'Overhead Press', sets: 4, reps: '6-10', description: 'Press a barbell or dumbbells overhead while standing.' },
      { name: 'Lateral Raise', sets: 3, reps: '12-15', description: 'Raise dumbbells to your sides up to shoulder level.' },
      { name: 'Front Raise', sets: 3, reps: '12-15', description: 'Raise dumbbells in front of you to shoulder level.' },
      { name: 'Rear Delt Fly', sets: 3, reps: '12-15', description: 'Bend forward and raise dumbbells to your sides.' },
      { name: 'Arnold Press', sets: 3, reps: '8-10', description: 'Rotate dumbbells from front to side while pressing overhead.' },
    ],
  },
  {
    id: 'lower-back',
    name: 'Lower Back',
    icon: '🔻',
    exercises: [
      { name: 'Back Extension', sets: 3, reps: '12-15', description: 'On a Roman chair, lower and raise your torso.' },
      { name: 'Romanian Deadlift', sets: 4, reps: '8-10', description: 'Hinge at the hips with a barbell, keeping legs slightly bent.' },
      { name: 'Good Morning', sets: 3, reps: '10-12', description: 'With a barbell on your back, hinge forward at the hips.' },
      { name: 'Superman', sets: 3, reps: '12-15', description: 'Lie face down and raise your arms and legs off the ground.' },
    ],
  },
  {
    id: 'glutes',
    name: 'Glutes',
    icon: '🍑',
    exercises: [
      { name: 'Hip Thrust', sets: 4, reps: '8-12', description: 'Sit against a bench and thrust a barbell upward with your hips.' },
      { name: 'Glute Bridge', sets: 3, reps: '12-15', description: 'Lie on your back and raise your hips with a barbell.' },
      { name: 'Step-Ups', sets: 3, reps: '10 each leg', description: 'Step onto a box or bench holding dumbbells.' },
      { name: 'Cable Kickbacks', sets: 3, reps: '12 each leg', description: 'Kick your leg back against cable resistance.' },
      { name: 'Bulgarian Split Squat', sets: 3, reps: '10 each leg', description: 'Squat on one leg with rear foot elevated on a bench.' },
    ],
  },
  {
    id: 'calves',
    name: 'Calves',
    icon: '🦶',
    exercises: [
      { name: 'Standing Calf Raise', sets: 4, reps: '12-15', description: 'Stand on a platform and raise your heels upward.' },
      { name: 'Seated Calf Raise', sets: 3, reps: '15-20', description: 'Raise your heels while seated with weight on your knees.' },
      { name: 'Donkey Calf Raise', sets: 3, reps: '12-15', description: 'Bend at the waist and raise your heels with weight on your back.' },
      { name: "Farmer's Walk on Toes", sets: 3, reps: '30-40 sec', description: 'Walk on your toes while holding heavy dumbbells.' },
    ],
  },
  {
    id: 'trapezius',
    name: 'Trapezius',
    icon: '🔺',
    exercises: [
      { name: 'Barbell Shrug', sets: 4, reps: '10-15', description: 'Shrug your shoulders upward while holding a barbell.' },
      { name: 'Dumbbell Shrug', sets: 3, reps: '12-15', description: 'Shrug your shoulders while holding dumbbells at your sides.' },
      { name: 'Upright Row', sets: 3, reps: '10-12', description: 'Pull a barbell up along your body to chin level.' },
      { name: 'Face Pull', sets: 3, reps: '12-15', description: 'Pull a rope cable toward your face to target upper traps.' },
      { name: "Farmer's Carry", sets: 3, reps: '40-60 sec', description: 'Walk while holding heavy dumbbells at your sides.' },
    ],
  },
];
