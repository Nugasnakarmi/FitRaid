export type Exercise = {
  name: string;
  sets: number;
  reps: string;
  description: string;
  images?: [string, string];
};

const IMG_BASE =
  'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises';

function exerciseImages(id: string): [string, string] {
  return [`${IMG_BASE}/${id}/0.jpg`, `${IMG_BASE}/${id}/1.jpg`];
}

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
      { name: 'Deadlift', sets: 4, reps: '6-8', description: 'Lift barbell from ground to hip level with a flat back.', images: exerciseImages('Barbell_Deadlift') },
      { name: 'Clean and Press', sets: 3, reps: '6-8', description: 'Lift barbell to shoulders, then press overhead.', images: exerciseImages('Clean_and_Press') },
      { name: 'Thrusters', sets: 3, reps: '10-12', description: 'Front squat into an overhead press in one fluid motion.', images: exerciseImages('Kettlebell_Thruster') },
      { name: 'Burpees', sets: 3, reps: '12-15', description: 'Drop to a push-up, jump back up, and repeat.' },
      { name: 'Turkish Get-Up', sets: 3, reps: '5 each side', description: 'Rise from lying to standing while holding a weight overhead.', images: exerciseImages('Kettlebell_Turkish_Get-Up_Squat_style') },
      { name: 'Snatch', sets: 4, reps: '4-6', description: 'Lift barbell from ground to overhead in one explosive movement.', images: exerciseImages('Power_Snatch') },
    ],
  },
  {
    id: 'abs',
    name: 'Abs',
    icon: '🔥',
    exercises: [
      { name: 'Plank', sets: 3, reps: '30-60 sec', description: 'Hold a push-up position with a straight body.', images: exerciseImages('Plank') },
      { name: 'Hanging Leg Raise', sets: 3, reps: '10-15', description: 'Hang from a bar and raise legs to a 90-degree angle.', images: exerciseImages('Hanging_Leg_Raise') },
      { name: 'Weighted Crunches', sets: 3, reps: '15-20', description: 'Perform crunches while holding a weight on your chest.', images: exerciseImages('Weighted_Crunches') },
      { name: 'Russian Twist', sets: 3, reps: '20 total', description: 'Sit with legs raised and rotate torso side to side with a weight.', images: exerciseImages('Russian_Twist') },
      { name: 'Ab Wheel Rollout', sets: 3, reps: '10-12', description: 'Kneel and roll an ab wheel forward, then pull back.', images: exerciseImages('Ab_Roller') },
      { name: 'Cable Woodchopper', sets: 3, reps: '12 each side', description: 'Rotate torso diagonally while pulling a cable from high to low.', images: exerciseImages('Standing_Cable_Wood_Chop') },
    ],
  },
  {
    id: 'triceps',
    name: 'Triceps',
    icon: '💪',
    exercises: [
      { name: 'Tricep Dips', sets: 3, reps: '8-12', description: 'Lower and raise your body on parallel bars, focusing on triceps.', images: exerciseImages('Dips_-_Triceps_Version') },
      { name: 'Triceps Rope Pushdown', sets: 3, reps: '10-15', description: 'Push a rope attachment down on a cable machine.', images: exerciseImages('Triceps_Pushdown_-_Rope_Attachment') },
      { name: 'Skull Crushers', sets: 3, reps: '8-12', description: 'Lying on a bench, lower a barbell to your forehead and extend.', images: exerciseImages('Lying_Triceps_Press') },
      { name: 'Close-Grip Bench Press', sets: 4, reps: '8-10', description: 'Bench press with hands shoulder-width apart to target triceps.', images: exerciseImages('Close-Grip_Barbell_Bench_Press') },
      { name: 'Overhead Triceps Extension', sets: 3, reps: '10-12', description: 'Hold a dumbbell overhead and lower it behind your head.', images: exerciseImages('Standing_Dumbbell_Triceps_Extension') },
      { name: 'Tricep Kickbacks', sets: 3, reps: '12-15', description: 'Bend forward and extend a dumbbell behind you.', images: exerciseImages('Tricep_Dumbbell_Kickback') },
    ],
  },
  {
    id: 'back',
    name: 'Back',
    icon: '🔙',
    exercises: [
      { name: 'Pull-Ups', sets: 4, reps: '6-10', description: 'Hang from a bar and pull yourself up until your chin clears it.', images: exerciseImages('Pullups') },
      { name: 'Barbell Row', sets: 4, reps: '8-10', description: 'Bend over and row a barbell toward your lower chest.', images: exerciseImages('Bent_Over_Barbell_Row') },
      { name: 'Lat Pulldown', sets: 3, reps: '10-12', description: 'Pull a wide bar down to your chest on a cable machine.', images: exerciseImages('Wide-Grip_Lat_Pulldown') },
      { name: 'Seated Cable Row', sets: 3, reps: '10-12', description: 'Pull a cable handle toward your midsection while seated.', images: exerciseImages('Seated_Cable_Rows') },
      { name: 'T-Bar Row', sets: 3, reps: '8-10', description: 'Row a loaded T-bar toward your chest while bent over.', images: exerciseImages('T-Bar_Row_with_Handle') },
      { name: 'Face Pull', sets: 3, reps: '12-15', description: 'Pull a rope cable toward your face to target upper back and rear delts.', images: exerciseImages('Face_Pull') },
    ],
  },
  {
    id: 'quadriceps',
    name: 'Quadriceps',
    icon: '🦵',
    exercises: [
      { name: 'Barbell Squat', sets: 4, reps: '6-10', description: 'Place barbell on upper back, squat down and drive up.', images: exerciseImages('Barbell_Squat') },
      { name: 'Leg Press', sets: 4, reps: '10-12', description: 'Push a weighted platform away using your legs.', images: exerciseImages('Leg_Press') },
      { name: 'Walking Lunges', sets: 3, reps: '12 each leg', description: 'Step forward into a lunge, alternate legs while walking.', images: exerciseImages('Bodyweight_Walking_Lunge') },
      { name: 'Bulgarian Split Squat', sets: 3, reps: '10 each leg', description: 'Squat on one leg with rear foot elevated on a bench.', images: exerciseImages('Split_Squats') },
      { name: 'Leg Extension', sets: 3, reps: '12-15', description: 'Extend your legs on a machine to target the quadriceps.', images: exerciseImages('Leg_Extensions') },
      { name: 'Goblet Squat', sets: 3, reps: '12-15', description: 'Hold a dumbbell at chest level and squat down.', images: exerciseImages('Goblet_Squat') },
    ],
  },
  {
    id: 'hamstrings',
    name: 'Hamstrings',
    icon: '🦿',
    exercises: [
      { name: 'Romanian Deadlift', sets: 4, reps: '8-10', description: 'Hinge at the hips with a barbell, keeping legs slightly bent.', images: exerciseImages('Romanian_Deadlift') },
      { name: 'Leg Curl', sets: 3, reps: '10-12', description: 'Curl your legs on a machine to target the hamstrings.', images: exerciseImages('Seated_Leg_Curl') },
      { name: 'Good Mornings', sets: 3, reps: '10-12', description: 'With a barbell on your back, hinge forward at the hips.', images: exerciseImages('Good_Morning') },
      { name: 'Glute-Ham Raise', sets: 3, reps: '8-10', description: 'On a GHD bench, lower your torso and curl back up.', images: exerciseImages('Glute_Ham_Raise') },
      { name: 'Nordic Hamstring Curl', sets: 3, reps: '6-8', description: 'Kneel and slowly lower your body forward, then curl back up.', images: exerciseImages('Natural_Glute_Ham_Raise') },
    ],
  },
  {
    id: 'forearms',
    name: 'Forearms',
    icon: '🤜',
    exercises: [
      { name: 'Wrist Curl', sets: 3, reps: '15-20', description: 'Rest forearms on a bench and curl a barbell with your wrists.', images: exerciseImages('Palms-Up_Barbell_Wrist_Curl_Over_A_Bench') },
      { name: 'Reverse Wrist Curl', sets: 3, reps: '15-20', description: 'Same as wrist curl but with palms facing down.', images: exerciseImages('Palms-Down_Wrist_Curl_Over_A_Bench') },
      { name: "Farmer's Carry", sets: 3, reps: '40-60 sec', description: 'Walk while holding heavy dumbbells at your sides.', images: exerciseImages('Farmers_Walk') },
      { name: 'Plate Pinch Hold', sets: 3, reps: '20-30 sec', description: 'Pinch two weight plates together and hold.', images: exerciseImages('Plate_Pinch') },
    ],
  },
  {
    id: 'chest',
    name: 'Chest',
    icon: '🫁',
    exercises: [
      { name: 'Flat Bench Press', sets: 4, reps: '6-10', description: 'Lie on a flat bench and press a barbell upward.', images: exerciseImages('Barbell_Bench_Press_-_Medium_Grip') },
      { name: 'Incline Dumbbell Press', sets: 3, reps: '8-12', description: 'Press dumbbells on an incline bench to target upper chest.', images: exerciseImages('Incline_Dumbbell_Press') },
      { name: 'Chest Fly', sets: 3, reps: '10-12', description: 'Open and close your arms with dumbbells in an arc motion.', images: exerciseImages('Dumbbell_Flyes') },
      { name: 'Push-Up', sets: 3, reps: '15-20', description: 'Lower and push your body up from the floor.', images: exerciseImages('Pushups') },
      { name: 'Pec Deck Machine', sets: 3, reps: '12-15', description: 'Bring the pads together on a machine to squeeze your chest.', images: exerciseImages('Butterfly') },
      { name: 'Decline Bench Press', sets: 3, reps: '8-10', description: 'Press a barbell on a decline bench to target lower chest.', images: exerciseImages('Decline_Barbell_Bench_Press') },
    ],
  },
  {
    id: 'biceps',
    name: 'Biceps',
    icon: '💪',
    exercises: [
      { name: 'Barbell Curl', sets: 4, reps: '8-12', description: 'Curl a barbell toward your shoulders while standing.', images: exerciseImages('Barbell_Curl') },
      { name: 'Hammer Curl', sets: 3, reps: '10-12', description: 'Curl dumbbells with a neutral grip to target the brachialis.', images: exerciseImages('Hammer_Curls') },
      { name: 'Preacher Curl', sets: 3, reps: '10-12', description: 'Curl on a preacher bench for isolated bicep contraction.', images: exerciseImages('Preacher_Curl') },
      { name: 'Concentration Curl', sets: 3, reps: '10-12', description: 'Sit and curl a dumbbell with your elbow braced on your thigh.', images: exerciseImages('Concentration_Curls') },
      { name: 'Cable Curl', sets: 3, reps: '12-15', description: 'Curl a cable bar from a low pulley position.', images: exerciseImages('Standing_Biceps_Cable_Curl') },
      { name: 'Chin-Up', sets: 3, reps: '6-10', description: 'Pull yourself up on a bar with an underhand grip.', images: exerciseImages('Chin-Up') },
    ],
  },
  {
    id: 'shoulders',
    name: 'Shoulders',
    icon: '🙌',
    exercises: [
      { name: 'Overhead Press', sets: 4, reps: '6-10', description: 'Press a barbell or dumbbells overhead while standing.', images: exerciseImages('Standing_Military_Press') },
      { name: 'Lateral Raise', sets: 3, reps: '12-15', description: 'Raise dumbbells to your sides up to shoulder level.', images: exerciseImages('Side_Lateral_Raise') },
      { name: 'Front Raise', sets: 3, reps: '12-15', description: 'Raise dumbbells in front of you to shoulder level.', images: exerciseImages('Front_Dumbbell_Raise') },
      { name: 'Rear Delt Fly', sets: 3, reps: '12-15', description: 'Bend forward and raise dumbbells to your sides.', images: exerciseImages('Seated_Bent-Over_Rear_Delt_Raise') },
      { name: 'Arnold Press', sets: 3, reps: '8-10', description: 'Rotate dumbbells from front to side while pressing overhead.', images: exerciseImages('Arnold_Dumbbell_Press') },
    ],
  },
  {
    id: 'lower-back',
    name: 'Lower Back',
    icon: '🔻',
    exercises: [
      { name: 'Back Extension', sets: 3, reps: '12-15', description: 'On a Roman chair, lower and raise your torso.', images: exerciseImages('Hyperextensions_Back_Extensions') },
      { name: 'Romanian Deadlift', sets: 4, reps: '8-10', description: 'Hinge at the hips with a barbell, keeping legs slightly bent.', images: exerciseImages('Romanian_Deadlift') },
      { name: 'Good Morning', sets: 3, reps: '10-12', description: 'With a barbell on your back, hinge forward at the hips.', images: exerciseImages('Good_Morning') },
      { name: 'Superman', sets: 3, reps: '12-15', description: 'Lie face down and raise your arms and legs off the ground.', images: exerciseImages('Superman') },
    ],
  },
  {
    id: 'glutes',
    name: 'Glutes',
    icon: '🍑',
    exercises: [
      { name: 'Hip Thrust', sets: 4, reps: '8-12', description: 'Sit against a bench and thrust a barbell upward with your hips.', images: exerciseImages('Barbell_Hip_Thrust') },
      { name: 'Glute Bridge', sets: 3, reps: '12-15', description: 'Lie on your back and raise your hips with a barbell.', images: exerciseImages('Barbell_Glute_Bridge') },
      { name: 'Step-Ups', sets: 3, reps: '10 each leg', description: 'Step onto a box or bench holding dumbbells.', images: exerciseImages('Barbell_Step_Ups') },
      { name: 'Cable Kickbacks', sets: 3, reps: '12 each leg', description: 'Kick your leg back against cable resistance.', images: exerciseImages('One-Legged_Cable_Kickback') },
      { name: 'Bulgarian Split Squat', sets: 3, reps: '10 each leg', description: 'Squat on one leg with rear foot elevated on a bench.', images: exerciseImages('Split_Squats') },
    ],
  },
  {
    id: 'calves',
    name: 'Calves',
    icon: '🦶',
    exercises: [
      { name: 'Standing Calf Raise', sets: 4, reps: '12-15', description: 'Stand on a platform and raise your heels upward.', images: exerciseImages('Standing_Calf_Raises') },
      { name: 'Seated Calf Raise', sets: 3, reps: '15-20', description: 'Raise your heels while seated with weight on your knees.', images: exerciseImages('Seated_Calf_Raise') },
      { name: 'Donkey Calf Raise', sets: 3, reps: '12-15', description: 'Bend at the waist and raise your heels with weight on your back.', images: exerciseImages('Donkey_Calf_Raises') },
      { name: "Farmer's Walk on Toes", sets: 3, reps: '30-40 sec', description: 'Walk on your toes while holding heavy dumbbells.', images: exerciseImages('Farmers_Walk') },
    ],
  },
  {
    id: 'trapezius',
    name: 'Trapezius',
    icon: '🔺',
    exercises: [
      { name: 'Barbell Shrug', sets: 4, reps: '10-15', description: 'Shrug your shoulders upward while holding a barbell.', images: exerciseImages('Barbell_Shrug') },
      { name: 'Dumbbell Shrug', sets: 3, reps: '12-15', description: 'Shrug your shoulders while holding dumbbells at your sides.', images: exerciseImages('Dumbbell_Shrug') },
      { name: 'Upright Row', sets: 3, reps: '10-12', description: 'Pull a barbell up along your body to chin level.', images: exerciseImages('Upright_Barbell_Row') },
      { name: 'Face Pull', sets: 3, reps: '12-15', description: 'Pull a rope cable toward your face to target upper traps.', images: exerciseImages('Face_Pull') },
      { name: "Farmer's Carry", sets: 3, reps: '40-60 sec', description: 'Walk while holding heavy dumbbells at your sides.', images: exerciseImages('Farmers_Walk') },
    ],
  },
];
