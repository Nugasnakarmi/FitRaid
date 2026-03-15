export type Exercise = {
  name: string;
  sets: number;
  reps: string;
  description: string;
  images?: [string, string];
};

const IMG_BASE =
  'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises';

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
      { name: 'Deadlift', sets: 4, reps: '6-8', description: 'Lift barbell from ground to hip level with a flat back.', images: [`${IMG_BASE}/Barbell_Deadlift/0.jpg`, `${IMG_BASE}/Barbell_Deadlift/1.jpg`] },
      { name: 'Clean and Press', sets: 3, reps: '6-8', description: 'Lift barbell to shoulders, then press overhead.', images: [`${IMG_BASE}/Clean_and_Press/0.jpg`, `${IMG_BASE}/Clean_and_Press/1.jpg`] },
      { name: 'Thrusters', sets: 3, reps: '10-12', description: 'Front squat into an overhead press in one fluid motion.', images: [`${IMG_BASE}/Kettlebell_Thruster/0.jpg`, `${IMG_BASE}/Kettlebell_Thruster/1.jpg`] },
      { name: 'Burpees', sets: 3, reps: '12-15', description: 'Drop to a push-up, jump back up, and repeat.', images: [`${IMG_BASE}/Box_Jump_Multiple_Response/0.jpg`, `${IMG_BASE}/Box_Jump_Multiple_Response/1.jpg`] },
      { name: 'Turkish Get-Up', sets: 3, reps: '5 each side', description: 'Rise from lying to standing while holding a weight overhead.', images: [`${IMG_BASE}/Kettlebell_Turkish_Get-Up_Squat_style/0.jpg`, `${IMG_BASE}/Kettlebell_Turkish_Get-Up_Squat_style/1.jpg`] },
      { name: 'Snatch', sets: 4, reps: '4-6', description: 'Lift barbell from ground to overhead in one explosive movement.', images: [`${IMG_BASE}/Power_Snatch/0.jpg`, `${IMG_BASE}/Power_Snatch/1.jpg`] },
    ],
  },
  {
    id: 'abs',
    name: 'Abs',
    icon: '🔥',
    exercises: [
      { name: 'Plank', sets: 3, reps: '30-60 sec', description: 'Hold a push-up position with a straight body.', images: [`${IMG_BASE}/Plank/0.jpg`, `${IMG_BASE}/Plank/1.jpg`] },
      { name: 'Hanging Leg Raise', sets: 3, reps: '10-15', description: 'Hang from a bar and raise legs to a 90-degree angle.', images: [`${IMG_BASE}/Hanging_Leg_Raise/0.jpg`, `${IMG_BASE}/Hanging_Leg_Raise/1.jpg`] },
      { name: 'Weighted Crunches', sets: 3, reps: '15-20', description: 'Perform crunches while holding a weight on your chest.', images: [`${IMG_BASE}/Weighted_Crunches/0.jpg`, `${IMG_BASE}/Weighted_Crunches/1.jpg`] },
      { name: 'Russian Twist', sets: 3, reps: '20 total', description: 'Sit with legs raised and rotate torso side to side with a weight.', images: [`${IMG_BASE}/Russian_Twist/0.jpg`, `${IMG_BASE}/Russian_Twist/1.jpg`] },
      { name: 'Ab Wheel Rollout', sets: 3, reps: '10-12', description: 'Kneel and roll an ab wheel forward, then pull back.', images: [`${IMG_BASE}/Ab_Roller/0.jpg`, `${IMG_BASE}/Ab_Roller/1.jpg`] },
      { name: 'Cable Woodchopper', sets: 3, reps: '12 each side', description: 'Rotate torso diagonally while pulling a cable from high to low.', images: [`${IMG_BASE}/Standing_Cable_Wood_Chop/0.jpg`, `${IMG_BASE}/Standing_Cable_Wood_Chop/1.jpg`] },
    ],
  },
  {
    id: 'triceps',
    name: 'Triceps',
    icon: '💪',
    exercises: [
      { name: 'Tricep Dips', sets: 3, reps: '8-12', description: 'Lower and raise your body on parallel bars, focusing on triceps.', images: [`${IMG_BASE}/Dips_-_Triceps_Version/0.jpg`, `${IMG_BASE}/Dips_-_Triceps_Version/1.jpg`] },
      { name: 'Triceps Rope Pushdown', sets: 3, reps: '10-15', description: 'Push a rope attachment down on a cable machine.', images: [`${IMG_BASE}/Triceps_Pushdown_-_Rope_Attachment/0.jpg`, `${IMG_BASE}/Triceps_Pushdown_-_Rope_Attachment/1.jpg`] },
      { name: 'Skull Crushers', sets: 3, reps: '8-12', description: 'Lying on a bench, lower a barbell to your forehead and extend.', images: [`${IMG_BASE}/Lying_Triceps_Press/0.jpg`, `${IMG_BASE}/Lying_Triceps_Press/1.jpg`] },
      { name: 'Close-Grip Bench Press', sets: 4, reps: '8-10', description: 'Bench press with hands shoulder-width apart to target triceps.', images: [`${IMG_BASE}/Close-Grip_Barbell_Bench_Press/0.jpg`, `${IMG_BASE}/Close-Grip_Barbell_Bench_Press/1.jpg`] },
      { name: 'Overhead Triceps Extension', sets: 3, reps: '10-12', description: 'Hold a dumbbell overhead and lower it behind your head.', images: [`${IMG_BASE}/Standing_Dumbbell_Triceps_Extension/0.jpg`, `${IMG_BASE}/Standing_Dumbbell_Triceps_Extension/1.jpg`] },
      { name: 'Tricep Kickbacks', sets: 3, reps: '12-15', description: 'Bend forward and extend a dumbbell behind you.', images: [`${IMG_BASE}/Tricep_Dumbbell_Kickback/0.jpg`, `${IMG_BASE}/Tricep_Dumbbell_Kickback/1.jpg`] },
    ],
  },
  {
    id: 'back',
    name: 'Back',
    icon: '🔙',
    exercises: [
      { name: 'Pull-Ups', sets: 4, reps: '6-10', description: 'Hang from a bar and pull yourself up until your chin clears it.', images: [`${IMG_BASE}/Pullups/0.jpg`, `${IMG_BASE}/Pullups/1.jpg`] },
      { name: 'Barbell Row', sets: 4, reps: '8-10', description: 'Bend over and row a barbell toward your lower chest.', images: [`${IMG_BASE}/Bent_Over_Barbell_Row/0.jpg`, `${IMG_BASE}/Bent_Over_Barbell_Row/1.jpg`] },
      { name: 'Lat Pulldown', sets: 3, reps: '10-12', description: 'Pull a wide bar down to your chest on a cable machine.', images: [`${IMG_BASE}/Wide-Grip_Lat_Pulldown/0.jpg`, `${IMG_BASE}/Wide-Grip_Lat_Pulldown/1.jpg`] },
      { name: 'Seated Cable Row', sets: 3, reps: '10-12', description: 'Pull a cable handle toward your midsection while seated.', images: [`${IMG_BASE}/Seated_Cable_Rows/0.jpg`, `${IMG_BASE}/Seated_Cable_Rows/1.jpg`] },
      { name: 'T-Bar Row', sets: 3, reps: '8-10', description: 'Row a loaded T-bar toward your chest while bent over.', images: [`${IMG_BASE}/T-Bar_Row_with_Handle/0.jpg`, `${IMG_BASE}/T-Bar_Row_with_Handle/1.jpg`] },
      { name: 'Face Pull', sets: 3, reps: '12-15', description: 'Pull a rope cable toward your face to target upper back and rear delts.', images: [`${IMG_BASE}/Face_Pull/0.jpg`, `${IMG_BASE}/Face_Pull/1.jpg`] },
    ],
  },
  {
    id: 'quadriceps',
    name: 'Quadriceps',
    icon: '🦵',
    exercises: [
      { name: 'Barbell Squat', sets: 4, reps: '6-10', description: 'Place barbell on upper back, squat down and drive up.', images: [`${IMG_BASE}/Barbell_Squat/0.jpg`, `${IMG_BASE}/Barbell_Squat/1.jpg`] },
      { name: 'Leg Press', sets: 4, reps: '10-12', description: 'Push a weighted platform away using your legs.', images: [`${IMG_BASE}/Leg_Press/0.jpg`, `${IMG_BASE}/Leg_Press/1.jpg`] },
      { name: 'Walking Lunges', sets: 3, reps: '12 each leg', description: 'Step forward into a lunge, alternate legs while walking.', images: [`${IMG_BASE}/Bodyweight_Walking_Lunge/0.jpg`, `${IMG_BASE}/Bodyweight_Walking_Lunge/1.jpg`] },
      { name: 'Bulgarian Split Squat', sets: 3, reps: '10 each leg', description: 'Squat on one leg with rear foot elevated on a bench.', images: [`${IMG_BASE}/Split_Squats/0.jpg`, `${IMG_BASE}/Split_Squats/1.jpg`] },
      { name: 'Leg Extension', sets: 3, reps: '12-15', description: 'Extend your legs on a machine to target the quadriceps.', images: [`${IMG_BASE}/Leg_Extensions/0.jpg`, `${IMG_BASE}/Leg_Extensions/1.jpg`] },
      { name: 'Goblet Squat', sets: 3, reps: '12-15', description: 'Hold a dumbbell at chest level and squat down.', images: [`${IMG_BASE}/Goblet_Squat/0.jpg`, `${IMG_BASE}/Goblet_Squat/1.jpg`] },
    ],
  },
  {
    id: 'hamstrings',
    name: 'Hamstrings',
    icon: '🦿',
    exercises: [
      { name: 'Romanian Deadlift', sets: 4, reps: '8-10', description: 'Hinge at the hips with a barbell, keeping legs slightly bent.', images: [`${IMG_BASE}/Romanian_Deadlift/0.jpg`, `${IMG_BASE}/Romanian_Deadlift/1.jpg`] },
      { name: 'Leg Curl', sets: 3, reps: '10-12', description: 'Curl your legs on a machine to target the hamstrings.', images: [`${IMG_BASE}/Seated_Leg_Curl/0.jpg`, `${IMG_BASE}/Seated_Leg_Curl/1.jpg`] },
      { name: 'Good Mornings', sets: 3, reps: '10-12', description: 'With a barbell on your back, hinge forward at the hips.', images: [`${IMG_BASE}/Good_Morning/0.jpg`, `${IMG_BASE}/Good_Morning/1.jpg`] },
      { name: 'Glute-Ham Raise', sets: 3, reps: '8-10', description: 'On a GHD bench, lower your torso and curl back up.', images: [`${IMG_BASE}/Glute_Ham_Raise/0.jpg`, `${IMG_BASE}/Glute_Ham_Raise/1.jpg`] },
      { name: 'Nordic Hamstring Curl', sets: 3, reps: '6-8', description: 'Kneel and slowly lower your body forward, then curl back up.', images: [`${IMG_BASE}/Natural_Glute_Ham_Raise/0.jpg`, `${IMG_BASE}/Natural_Glute_Ham_Raise/1.jpg`] },
    ],
  },
  {
    id: 'forearms',
    name: 'Forearms',
    icon: '🤜',
    exercises: [
      { name: 'Wrist Curl', sets: 3, reps: '15-20', description: 'Rest forearms on a bench and curl a barbell with your wrists.', images: [`${IMG_BASE}/Palms-Up_Barbell_Wrist_Curl_Over_A_Bench/0.jpg`, `${IMG_BASE}/Palms-Up_Barbell_Wrist_Curl_Over_A_Bench/1.jpg`] },
      { name: 'Reverse Wrist Curl', sets: 3, reps: '15-20', description: 'Same as wrist curl but with palms facing down.', images: [`${IMG_BASE}/Palms-Down_Wrist_Curl_Over_A_Bench/0.jpg`, `${IMG_BASE}/Palms-Down_Wrist_Curl_Over_A_Bench/1.jpg`] },
      { name: "Farmer's Carry", sets: 3, reps: '40-60 sec', description: 'Walk while holding heavy dumbbells at your sides.', images: [`${IMG_BASE}/Farmers_Walk/0.jpg`, `${IMG_BASE}/Farmers_Walk/1.jpg`] },
      { name: 'Plate Pinch Hold', sets: 3, reps: '20-30 sec', description: 'Pinch two weight plates together and hold.', images: [`${IMG_BASE}/Plate_Pinch/0.jpg`, `${IMG_BASE}/Plate_Pinch/1.jpg`] },
    ],
  },
  {
    id: 'chest',
    name: 'Chest',
    icon: '🫁',
    exercises: [
      { name: 'Flat Bench Press', sets: 4, reps: '6-10', description: 'Lie on a flat bench and press a barbell upward.', images: [`${IMG_BASE}/Barbell_Bench_Press_-_Medium_Grip/0.jpg`, `${IMG_BASE}/Barbell_Bench_Press_-_Medium_Grip/1.jpg`] },
      { name: 'Incline Dumbbell Press', sets: 3, reps: '8-12', description: 'Press dumbbells on an incline bench to target upper chest.', images: [`${IMG_BASE}/Incline_Dumbbell_Press/0.jpg`, `${IMG_BASE}/Incline_Dumbbell_Press/1.jpg`] },
      { name: 'Chest Fly', sets: 3, reps: '10-12', description: 'Open and close your arms with dumbbells in an arc motion.', images: [`${IMG_BASE}/Dumbbell_Flyes/0.jpg`, `${IMG_BASE}/Dumbbell_Flyes/1.jpg`] },
      { name: 'Push-Up', sets: 3, reps: '15-20', description: 'Lower and push your body up from the floor.', images: [`${IMG_BASE}/Pushups/0.jpg`, `${IMG_BASE}/Pushups/1.jpg`] },
      { name: 'Pec Deck Machine', sets: 3, reps: '12-15', description: 'Bring the pads together on a machine to squeeze your chest.', images: [`${IMG_BASE}/Butterfly/0.jpg`, `${IMG_BASE}/Butterfly/1.jpg`] },
      { name: 'Decline Bench Press', sets: 3, reps: '8-10', description: 'Press a barbell on a decline bench to target lower chest.', images: [`${IMG_BASE}/Decline_Barbell_Bench_Press/0.jpg`, `${IMG_BASE}/Decline_Barbell_Bench_Press/1.jpg`] },
    ],
  },
  {
    id: 'biceps',
    name: 'Biceps',
    icon: '💪',
    exercises: [
      { name: 'Barbell Curl', sets: 4, reps: '8-12', description: 'Curl a barbell toward your shoulders while standing.', images: [`${IMG_BASE}/Barbell_Curl/0.jpg`, `${IMG_BASE}/Barbell_Curl/1.jpg`] },
      { name: 'Hammer Curl', sets: 3, reps: '10-12', description: 'Curl dumbbells with a neutral grip to target the brachialis.', images: [`${IMG_BASE}/Hammer_Curls/0.jpg`, `${IMG_BASE}/Hammer_Curls/1.jpg`] },
      { name: 'Preacher Curl', sets: 3, reps: '10-12', description: 'Curl on a preacher bench for isolated bicep contraction.', images: [`${IMG_BASE}/Preacher_Curl/0.jpg`, `${IMG_BASE}/Preacher_Curl/1.jpg`] },
      { name: 'Concentration Curl', sets: 3, reps: '10-12', description: 'Sit and curl a dumbbell with your elbow braced on your thigh.', images: [`${IMG_BASE}/Concentration_Curls/0.jpg`, `${IMG_BASE}/Concentration_Curls/1.jpg`] },
      { name: 'Cable Curl', sets: 3, reps: '12-15', description: 'Curl a cable bar from a low pulley position.', images: [`${IMG_BASE}/Standing_Biceps_Cable_Curl/0.jpg`, `${IMG_BASE}/Standing_Biceps_Cable_Curl/1.jpg`] },
      { name: 'Chin-Up', sets: 3, reps: '6-10', description: 'Pull yourself up on a bar with an underhand grip.', images: [`${IMG_BASE}/Chin-Up/0.jpg`, `${IMG_BASE}/Chin-Up/1.jpg`] },
    ],
  },
  {
    id: 'shoulders',
    name: 'Shoulders',
    icon: '🙌',
    exercises: [
      { name: 'Overhead Press', sets: 4, reps: '6-10', description: 'Press a barbell or dumbbells overhead while standing.', images: [`${IMG_BASE}/Standing_Military_Press/0.jpg`, `${IMG_BASE}/Standing_Military_Press/1.jpg`] },
      { name: 'Lateral Raise', sets: 3, reps: '12-15', description: 'Raise dumbbells to your sides up to shoulder level.', images: [`${IMG_BASE}/Side_Lateral_Raise/0.jpg`, `${IMG_BASE}/Side_Lateral_Raise/1.jpg`] },
      { name: 'Front Raise', sets: 3, reps: '12-15', description: 'Raise dumbbells in front of you to shoulder level.', images: [`${IMG_BASE}/Front_Dumbbell_Raise/0.jpg`, `${IMG_BASE}/Front_Dumbbell_Raise/1.jpg`] },
      { name: 'Rear Delt Fly', sets: 3, reps: '12-15', description: 'Bend forward and raise dumbbells to your sides.', images: [`${IMG_BASE}/Seated_Bent-Over_Rear_Delt_Raise/0.jpg`, `${IMG_BASE}/Seated_Bent-Over_Rear_Delt_Raise/1.jpg`] },
      { name: 'Arnold Press', sets: 3, reps: '8-10', description: 'Rotate dumbbells from front to side while pressing overhead.', images: [`${IMG_BASE}/Arnold_Dumbbell_Press/0.jpg`, `${IMG_BASE}/Arnold_Dumbbell_Press/1.jpg`] },
    ],
  },
  {
    id: 'lower-back',
    name: 'Lower Back',
    icon: '🔻',
    exercises: [
      { name: 'Back Extension', sets: 3, reps: '12-15', description: 'On a Roman chair, lower and raise your torso.', images: [`${IMG_BASE}/Hyperextensions_Back_Extensions/0.jpg`, `${IMG_BASE}/Hyperextensions_Back_Extensions/1.jpg`] },
      { name: 'Romanian Deadlift', sets: 4, reps: '8-10', description: 'Hinge at the hips with a barbell, keeping legs slightly bent.', images: [`${IMG_BASE}/Romanian_Deadlift/0.jpg`, `${IMG_BASE}/Romanian_Deadlift/1.jpg`] },
      { name: 'Good Morning', sets: 3, reps: '10-12', description: 'With a barbell on your back, hinge forward at the hips.', images: [`${IMG_BASE}/Good_Morning/0.jpg`, `${IMG_BASE}/Good_Morning/1.jpg`] },
      { name: 'Superman', sets: 3, reps: '12-15', description: 'Lie face down and raise your arms and legs off the ground.', images: [`${IMG_BASE}/Superman/0.jpg`, `${IMG_BASE}/Superman/1.jpg`] },
    ],
  },
  {
    id: 'glutes',
    name: 'Glutes',
    icon: '🍑',
    exercises: [
      { name: 'Hip Thrust', sets: 4, reps: '8-12', description: 'Sit against a bench and thrust a barbell upward with your hips.', images: [`${IMG_BASE}/Barbell_Hip_Thrust/0.jpg`, `${IMG_BASE}/Barbell_Hip_Thrust/1.jpg`] },
      { name: 'Glute Bridge', sets: 3, reps: '12-15', description: 'Lie on your back and raise your hips with a barbell.', images: [`${IMG_BASE}/Barbell_Glute_Bridge/0.jpg`, `${IMG_BASE}/Barbell_Glute_Bridge/1.jpg`] },
      { name: 'Step-Ups', sets: 3, reps: '10 each leg', description: 'Step onto a box or bench holding dumbbells.', images: [`${IMG_BASE}/Barbell_Step_Ups/0.jpg`, `${IMG_BASE}/Barbell_Step_Ups/1.jpg`] },
      { name: 'Cable Kickbacks', sets: 3, reps: '12 each leg', description: 'Kick your leg back against cable resistance.', images: [`${IMG_BASE}/One-Legged_Cable_Kickback/0.jpg`, `${IMG_BASE}/One-Legged_Cable_Kickback/1.jpg`] },
      { name: 'Bulgarian Split Squat', sets: 3, reps: '10 each leg', description: 'Squat on one leg with rear foot elevated on a bench.', images: [`${IMG_BASE}/Split_Squats/0.jpg`, `${IMG_BASE}/Split_Squats/1.jpg`] },
    ],
  },
  {
    id: 'calves',
    name: 'Calves',
    icon: '🦶',
    exercises: [
      { name: 'Standing Calf Raise', sets: 4, reps: '12-15', description: 'Stand on a platform and raise your heels upward.', images: [`${IMG_BASE}/Standing_Calf_Raises/0.jpg`, `${IMG_BASE}/Standing_Calf_Raises/1.jpg`] },
      { name: 'Seated Calf Raise', sets: 3, reps: '15-20', description: 'Raise your heels while seated with weight on your knees.', images: [`${IMG_BASE}/Seated_Calf_Raise/0.jpg`, `${IMG_BASE}/Seated_Calf_Raise/1.jpg`] },
      { name: 'Donkey Calf Raise', sets: 3, reps: '12-15', description: 'Bend at the waist and raise your heels with weight on your back.', images: [`${IMG_BASE}/Donkey_Calf_Raises/0.jpg`, `${IMG_BASE}/Donkey_Calf_Raises/1.jpg`] },
      { name: "Farmer's Walk on Toes", sets: 3, reps: '30-40 sec', description: 'Walk on your toes while holding heavy dumbbells.', images: [`${IMG_BASE}/Farmers_Walk/0.jpg`, `${IMG_BASE}/Farmers_Walk/1.jpg`] },
    ],
  },
  {
    id: 'trapezius',
    name: 'Trapezius',
    icon: '🔺',
    exercises: [
      { name: 'Barbell Shrug', sets: 4, reps: '10-15', description: 'Shrug your shoulders upward while holding a barbell.', images: [`${IMG_BASE}/Barbell_Shrug/0.jpg`, `${IMG_BASE}/Barbell_Shrug/1.jpg`] },
      { name: 'Dumbbell Shrug', sets: 3, reps: '12-15', description: 'Shrug your shoulders while holding dumbbells at your sides.', images: [`${IMG_BASE}/Dumbbell_Shrug/0.jpg`, `${IMG_BASE}/Dumbbell_Shrug/1.jpg`] },
      { name: 'Upright Row', sets: 3, reps: '10-12', description: 'Pull a barbell up along your body to chin level.', images: [`${IMG_BASE}/Upright_Barbell_Row/0.jpg`, `${IMG_BASE}/Upright_Barbell_Row/1.jpg`] },
      { name: 'Face Pull', sets: 3, reps: '12-15', description: 'Pull a rope cable toward your face to target upper traps.', images: [`${IMG_BASE}/Face_Pull/0.jpg`, `${IMG_BASE}/Face_Pull/1.jpg`] },
      { name: "Farmer's Carry", sets: 3, reps: '40-60 sec', description: 'Walk while holding heavy dumbbells at your sides.', images: [`${IMG_BASE}/Farmers_Walk/0.jpg`, `${IMG_BASE}/Farmers_Walk/1.jpg`] },
    ],
  },
];
