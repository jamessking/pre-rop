const CIRCUITS = {
  circuit1: {
    name: "Circuit 1",
    reps: [15, 25, 10],
    exercises: [
      { name: "Press Ups", cue: "Arms shoulder width, elbows tucked tight to your sides. Lower your chest to the floor." },
      { name: "Squats", cue: "Fingertips on shoulders, feet shoulder width apart. Lower until backside is just below knee level." },
      { name: "Crunches", cue: "Fingertips on temples, bring your knees to your elbows. Don't cross your feet." },
      { name: "Wide Arm Press Ups", cue: "Arms much wider than normal. Lower your torso as far as possible. You'll feel it in your chest." },
      { name: "Lunges", cue: "Hands on hips, alternate feet forward to a 90 degree angle. Back knee should not touch the floor." },
      { name: "Half Sit Ups", cue: "Feet flat, knees bent, hands on thighs. Raise head and chest, sliding hands to touch your knees." },
      { name: "Close Arm Press Ups", cue: "Index fingers and thumbs touching on the floor. Lower chest to floor and back up." },
      { name: "Hill Climbs", cue: "Press up position. Bring alternate knees to your elbows in a running motion." },
      { name: "V-Sits", cue: "Lie on back, raise legs straight up. Raise head and chest to touch your toes." }
    ]
  },
  circuit2: {
    name: "Circuit 2",
    reps: [15, 25, 10],
    exercises: [
      { name: "Stand Up Sit Downs", cue: "Start standing. Sit down quickly using one arm to steady yourself, then push back up. Alternate arms." },
      { name: "Hill Climbs", cue: "Press up position. Bring alternate knees to your elbows in a running motion." },
      { name: "Diamond Press Ups", cue: "Walk feet towards hands forming a triangle. Bend arms — you'll feel it in your shoulders." },
      { name: "Skydiver Press Ups", cue: "Chest on the floor, hands and feet slightly wider than normal. At the bottom, gently lift hands one inch off the floor." },
      { name: "Lunges", cue: "Hands on hips, alternate feet forward to 90 degrees. Keep your back straight." },
      { name: "Flutter Kicks", cue: "On your back, arms by your side. Legs straight, raised 6 inches. Kick like backstroke, no more than 6 inches apart." },
      { name: "Burpees", cue: "From standing, squat until backside touches heels, kick legs back to press up position, return to squat, then stand." },
      { name: "Squats", cue: "Fingertips on shoulders, feet shoulder width. Lower until backside is just below knee level." }
    ]
  }
};

const WEEKS = [
  {
    week: 1,
    days: [
      {
        day: 1,
        title: "Run + Bodyweight",
        summary: "1.5 mile run at steady pace, then 3 sets of bodyweight exercises",
        session: [
          { type: "run", name: "Warm Up Run", duration: 300, rpe: 3, cue: "Easy 5 minute warm up run. RPE 3 — feel like you could do this for hours." },
          { type: "run", name: "Main Run — 1.5 Miles", duration: 900, rpe: 6, cue: "Increase to 60–70% max heart rate. Comfortable pace throughout. RPE 6 — breathing heavily but can hold a conversation." },
          { type: "rest", name: "Rest", duration: 120, cue: "2 minute rest. Shake out your legs." },
          { type: "set", name: "Set 1 of 3", exercises: [
            { name: "Press Ups", reps: 20, cue: "Arms shoulder width, elbows tucked. Lower chest to floor." },
            { name: "Sit Ups", reps: 30, cue: "Feet flat, controlled movement up and down." },
            { name: "Bodyweight Squats", reps: 20, cue: "Feet shoulder width, lower until thighs are parallel." },
            { name: "Pull Ups", reps: 5, cue: "Full range of motion, chin over bar." }
          ]},
          { type: "rest", name: "Rest", duration: 60, cue: "1 minute rest between sets." },
          { type: "set", name: "Set 2 of 3", exercises: [
            { name: "Press Ups", reps: 20, cue: "Arms shoulder width, elbows tucked. Lower chest to floor." },
            { name: "Sit Ups", reps: 30, cue: "Controlled movement." },
            { name: "Bodyweight Squats", reps: 20, cue: "Keep back straight throughout." },
            { name: "Pull Ups", reps: 5, cue: "Full range of motion." }
          ]},
          { type: "rest", name: "Rest", duration: 60, cue: "1 minute rest." },
          { type: "set", name: "Set 3 of 3", exercises: [
            { name: "Press Ups", reps: 20, cue: "Strong finish. Elbows tucked, full range." },
            { name: "Sit Ups", reps: 30, cue: "Controlled all the way." },
            { name: "Bodyweight Squats", reps: 20, cue: "Good depth, back straight." },
            { name: "Pull Ups", reps: 5, cue: "Last set — full range of motion." }
          ]}
        ]
      },
      {
        day: 2,
        title: "Circuit 1",
        summary: "Full bodyweight circuit — 3 rounds at 15, 25, then 10 reps",
        circuit: "circuit1"
      },
      {
        day: 3,
        title: "Stretch Session",
        summary: "10 minute gentle run then full body stretch",
        session: [
          { type: "run", name: "Gentle Warm Up Run", duration: 600, rpe: 3, cue: "Easy 10 minute run. Keep it very light — RPE 3." },
          { type: "stretch", name: "Full Body Stretch", stretches: [
            { name: "Feet & Ankles", duration: 60, cue: "Rotate each ankle 10 times each direction. Flex and point your feet." },
            { name: "Calves", duration: 60, cue: "Step forward into a lunge, back heel flat on the ground. Hold 30 seconds each side." },
            { name: "Hamstrings", duration: 60, cue: "Straight leg, reach toward your toes. Hold 30–60 seconds each side." },
            { name: "Quads", duration: 60, cue: "Stand on one leg, pull heel to backside. Hold 30–60 seconds each side." },
            { name: "Hip Flexors", duration: 60, cue: "Kneeling lunge position, push hips forward gently. 30–60 seconds each side." },
            { name: "Glutes", duration: 60, cue: "Seated figure-four stretch. Cross ankle over opposite knee, lean forward gently." },
            { name: "Lower Back", duration: 60, cue: "Knees to chest, gentle rocking side to side." },
            { name: "Chest & Shoulders", duration: 60, cue: "Clasp hands behind back, gently lift and open the chest." },
            { name: "Neck", duration: 60, cue: "Gentle ear to shoulder, hold 20 seconds each side. Slow chin to chest." }
          ]}
        ]
      },
      {
        day: 4,
        title: "Circuit 2",
        summary: "Full bodyweight circuit — 3 rounds at 15, 25, then 10 reps",
        circuit: "circuit2"
      },
      {
        day: 5,
        title: "Fartlek Run",
        summary: "Interval speed session with walk recovery",
        session: [
          { type: "run", name: "Warm Up", duration: 300, rpe: 3, cue: "Easy 5 minute jog to warm up." },
          { type: "stretch", name: "Dynamic Stretches", stretches: [
            { name: "Leg Swings", duration: 30, cue: "Hold a wall, swing each leg forward and back 10 times." },
            { name: "Hip Circles", duration: 30, cue: "Hands on hips, large circles each direction." },
            { name: "High Knees", duration: 30, cue: "March on the spot bringing knees up high." }
          ]},
          { type: "interval_block", name: "Interval Block 1", rounds: 3, intervals: [
            { name: "Run Hard", duration: 30, rpe: "7-8", cue: "Run at 70–80% of your maximum pace. Push it." },
            { name: "Walk Recovery", duration: 30, rpe: 2, cue: "Walk. Let your heart rate come down." }
          ], rest: 90, restCue: "90 second rest between blocks." },
          { type: "interval_block", name: "Interval Block 2", rounds: 3, intervals: [
            { name: "Run Hard", duration: 30, rpe: "7-8", cue: "Run at 70–80% of your maximum pace." },
            { name: "Walk Recovery", duration: 30, rpe: 2, cue: "Walk. Recover." }
          ], rest: 0 }
        ]
      },
      { day: "6-7", title: "Rest & Recovery", summary: "Eat well and sleep. Allow your body to adapt.", rest: true }
    ]
  },
  {
    week: 2,
    days: [
      {
        day: 1,
        title: "Run + Bodyweight",
        summary: "2 mile run, then 3 sets with increased reps",
        session: [
          { type: "run", name: "Warm Up Run", duration: 300, rpe: 3, cue: "Easy 5 minute warm up jog." },
          { type: "run", name: "Main Run — 2 Miles", duration: 1080, rpe: 6, cue: "60% maximum heart rate. Steady and comfortable. RPE 6." },
          { type: "rest", name: "Rest", duration: 120, cue: "2 minute rest." },
          { type: "set", name: "Set 1 of 3", exercises: [
            { name: "Press Ups", reps: 25, cue: "Arms shoulder width, elbows tucked." },
            { name: "Sit Ups", reps: 30, cue: "Controlled movement." },
            { name: "Bodyweight Squats", reps: 20, cue: "Good depth, back straight." },
            { name: "Pull Ups", reps: 6, cue: "Full range of motion." }
          ]},
          { type: "rest", name: "Rest", duration: 60, cue: "1 minute rest." },
          { type: "set", name: "Set 2 of 3", exercises: [
            { name: "Press Ups", reps: 25, cue: "Stay strong — elbows tucked." },
            { name: "Sit Ups", reps: 30, cue: "Controlled." },
            { name: "Bodyweight Squats", reps: 20, cue: "Back straight throughout." },
            { name: "Pull Ups", reps: 6, cue: "Full range." }
          ]},
          { type: "rest", name: "Rest", duration: 60, cue: "1 minute rest." },
          { type: "set", name: "Set 3 of 3", exercises: [
            { name: "Press Ups", reps: 25, cue: "Final set. Give everything." },
            { name: "Sit Ups", reps: 30, cue: "Controlled to the end." },
            { name: "Bodyweight Squats", reps: 20, cue: "Strong finish." },
            { name: "Pull Ups", reps: 6, cue: "Last set — full range." }
          ]}
        ]
      },
      {
        day: 2,
        title: "Circuit 1",
        summary: "Full bodyweight circuit — 3 rounds",
        circuit: "circuit1"
      },
      {
        day: 3,
        title: "Interval Run",
        summary: "400m efforts with 200m walk recovery × 6",
        session: [
          { type: "run", name: "Warm Up", duration: 300, rpe: 3, cue: "Easy 5 minute warm up jog." },
          { type: "interval_block", name: "400m Intervals", rounds: 6, intervals: [
            { name: "Run 400m", duration: 120, rpe: "7-8", cue: "Run 400 metres at 70–80% max heart rate. Push yourself." },
            { name: "Walk 200m", duration: 90, rpe: 2, cue: "Walk 200 metres to recover." }
          ], rest: 0 }
        ]
      },
      {
        day: 4,
        title: "Circuit 2",
        summary: "Full bodyweight circuit — 3 rounds",
        circuit: "circuit2"
      },
      {
        day: 5,
        title: "Stretch Session",
        summary: "10 minute run and full body stretch",
        session: [
          { type: "run", name: "Gentle Warm Up Run", duration: 600, rpe: 3, cue: "Easy 10 minute run. Light effort only." },
          { type: "stretch", name: "Full Body Stretch", stretches: [
            { name: "Feet & Ankles", duration: 60, cue: "Rotate each ankle, flex and point." },
            { name: "Calves", duration: 60, cue: "Lunge position, back heel flat. 30 seconds each." },
            { name: "Hamstrings", duration: 60, cue: "Straight leg reach. 30–60 seconds each." },
            { name: "Quads", duration: 60, cue: "Stand, pull heel to backside. 30–60 seconds each." },
            { name: "Hip Flexors", duration: 60, cue: "Kneeling lunge, push hips forward gently." },
            { name: "Glutes", duration: 60, cue: "Figure-four seated stretch, lean forward." },
            { name: "Lower Back", duration: 60, cue: "Knees to chest, gentle rocking." },
            { name: "Chest & Shoulders", duration: 60, cue: "Clasp hands behind back, open the chest." },
            { name: "Neck", duration: 60, cue: "Ear to shoulder, hold 20 seconds each side." }
          ]}
        ]
      },
      { day: "6-7", title: "Rest & Recovery", summary: "Quality sleep and a balanced diet.", rest: true }
    ]
  },
  {
    week: 3,
    days: [
      {
        day: 1,
        title: "Run + Max Effort Bodyweight",
        summary: "3 mile run, then best effort press ups, sit ups and 30 pull ups",
        session: [
          { type: "run", name: "Warm Up Run", duration: 300, rpe: 3, cue: "Easy 5 minute warm up." },
          { type: "run", name: "Main Run — 3 Miles", duration: 1620, rpe: "6-7", cue: "60–70% max heart rate. RPE 6 to 7." },
          { type: "rest", name: "Rest", duration: 60, cue: "Short rest before bodyweight work." },
          { type: "max_effort", name: "Press Ups — Best Effort", cue: "Go until you cannot do another full press up. Count your reps." },
          { type: "rest", name: "Rest", duration: 90, cue: "1 minute 30 second rest." },
          { type: "max_effort", name: "Sit Ups — Best Effort", cue: "Go until you cannot do another. Count your reps." },
          { type: "rest", name: "Rest", duration: 60, cue: "1 minute rest." },
          { type: "max_effort", name: "Press Ups — Best Effort (Round 2)", cue: "Second max effort. How does it compare to the first?" },
          { type: "rest", name: "Rest", duration: 90, cue: "1 minute 30 second rest." },
          { type: "max_effort", name: "Sit Ups — Best Effort (Round 2)", cue: "Second max effort on sit ups." },
          { type: "set", name: "30 Pull Ups in Sets of 5", exercises: [
            { name: "Pull Ups", reps: 5, cue: "Set 1 — full range, chin over bar." },
            { name: "Pull Ups", reps: 5, cue: "Set 2." },
            { name: "Pull Ups", reps: 5, cue: "Set 3." },
            { name: "Pull Ups", reps: 5, cue: "Set 4." },
            { name: "Pull Ups", reps: 5, cue: "Set 5." },
            { name: "Pull Ups", reps: 5, cue: "Final set — 30 total." }
          ]}
        ]
      },
      {
        day: 2,
        title: "Circuit 1",
        summary: "Full bodyweight circuit — 3 rounds",
        circuit: "circuit1"
      },
      {
        day: 3,
        title: "Hill Session",
        summary: "10 hill sprints on a 30–40m incline, building intensity",
        session: [
          { type: "run", name: "Warm Up Run — 800m", duration: 300, rpe: 3, cue: "Steady 800 metre warm up run." },
          { type: "stretch", name: "Dynamic Leg Stretches", stretches: [
            { name: "Quad Swings", duration: 30, cue: "High knee march, exaggerating the lift." },
            { name: "Hamstring Swings", duration: 30, cue: "Swing each leg forward and back." },
            { name: "Calf Raises", duration: 30, cue: "Up onto toes, slow and controlled." },
            { name: "Groin Stretch", duration: 45, cue: "Wide stance, lower into a sumo squat and hold." }
          ]},
          { type: "hill_sprint", name: "Sprint 1 (Warm Up — 50%)", rpe: 3, cue: "50% effort. This is still warm up. Slow jog back to start." },
          { type: "hill_sprint", name: "Sprint 2 (50%)", rpe: 3, rest: 30, cue: "50% effort. Slow jog back, then 30 seconds rest." },
          { type: "hill_sprint", name: "Sprint 3 (50%)", rpe: 3, rest: 30, cue: "Final warm up sprint at 50%. Jog back, 30 seconds rest." },
          { type: "hill_sprint", name: "Sprint 4 (70–80%)", rpe: 7, rest: 45, cue: "Now we work. 70–80% effort. Jog back, 45 seconds rest." },
          { type: "hill_sprint", name: "Sprint 5 (70–80%)", rpe: 7, rest: 45, cue: "70–80% effort. Strong stride. Jog back, 45 seconds rest." },
          { type: "hill_sprint", name: "Sprint 6 (70–80%)", rpe: 7, rest: 45, cue: "Last of the 70% sprints. Jog back, 45 seconds rest." },
          { type: "hill_sprint", name: "Sprint 7 (90%)", rpe: 8, rest: 60, cue: "90% effort. Drive hard up the hill. Jog back, 1 minute rest." },
          { type: "hill_sprint", name: "Sprint 8 (90%)", rpe: 8, rest: 60, cue: "90% effort. Jog back, 1 minute rest." },
          { type: "hill_sprint", name: "Sprint 9 (90%)", rpe: 8, rest: 75, cue: "90% effort. Jog back, 1 minute 15 seconds rest." },
          { type: "hill_sprint", name: "Sprint 10 (100%)", rpe: "8-9", cue: "Everything you have. Then 5 minute cool down jog." },
          { type: "run", name: "Cool Down Jog", duration: 300, rpe: 2, cue: "Slow 5 minute cool down. Let your heart rate come right down." }
        ]
      },
      {
        day: 4,
        title: "Stretch Session",
        summary: "10 minute warm up and full body stretch",
        session: [
          { type: "run", name: "Gentle Warm Up", duration: 600, rpe: 3, cue: "Easy 10 minute warm up run." },
          { type: "stretch", name: "Full Body Stretch", stretches: [
            { name: "Feet & Ankles", duration: 60, cue: "Rotate each ankle, flex and point." },
            { name: "Calves", duration: 60, cue: "Lunge position, back heel flat." },
            { name: "Hamstrings", duration: 60, cue: "Straight leg reach, 30–60 seconds." },
            { name: "Quads", duration: 60, cue: "Heel to backside, 30–60 seconds each." },
            { name: "Hip Flexors", duration: 60, cue: "Kneeling lunge, push hips forward." },
            { name: "Glutes", duration: 60, cue: "Figure-four stretch." },
            { name: "Lower Back", duration: 60, cue: "Knees to chest." },
            { name: "Chest & Shoulders", duration: 60, cue: "Clasp behind back, open chest." },
            { name: "Neck", duration: 60, cue: "Ear to shoulder, 20 seconds each." }
          ]}
        ]
      },
      {
        day: 5,
        title: "Circuit 2",
        summary: "Full bodyweight circuit — 3 rounds",
        circuit: "circuit2"
      },
      { day: "6-7", title: "Rest & Recovery", summary: "Rest, eat well, sleep well.", rest: true }
    ]
  },
  {
    week: 4,
    days: [
      {
        day: 1,
        title: "Run + Max Effort Bodyweight",
        summary: "3 mile run at higher intensity, then max effort sets",
        session: [
          { type: "run", name: "Warm Up Run", duration: 600, rpe: 3, cue: "10 minute warm up jog." },
          { type: "run", name: "Main Run — 3 Miles", duration: 1500, rpe: "7-8", cue: "80% max heart rate. This is harder than before. Push yourself. RPE 7 to 8." },
          { type: "rest", name: "Rest", duration: 60, cue: "Brief rest." },
          { type: "max_effort", name: "Press Ups — Best Effort", cue: "Maximum press ups. Count every rep." },
          { type: "rest", name: "Rest", duration: 90, cue: "1 minute 30 rest." },
          { type: "max_effort", name: "Sit Ups — Best Effort", cue: "Maximum sit ups." },
          { type: "rest", name: "Rest", duration: 90, cue: "1 minute 30 rest." },
          { type: "set", name: "30 Pull Ups in Sets of 5", exercises: [
            { name: "Pull Ups", reps: 5, cue: "Set 1." },
            { name: "Pull Ups", reps: 5, cue: "Set 2." },
            { name: "Pull Ups", reps: 5, cue: "Set 3." },
            { name: "Pull Ups", reps: 5, cue: "Set 4." },
            { name: "Pull Ups", reps: 5, cue: "Set 5." },
            { name: "Pull Ups", reps: 5, cue: "Final set — 30 done." }
          ]}
        ]
      },
      {
        day: 2,
        title: "Circuit 1",
        summary: "Full bodyweight circuit — 3 rounds",
        circuit: "circuit1"
      },
      {
        day: 3,
        title: "Hill Climbs + Leg Circuit",
        summary: "10 hill climbs with squats, press ups and sit ups at the bottom",
        session: [
          { type: "run", name: "Warm Up", duration: 300, rpe: 3, cue: "Steady warm up run." },
          { type: "hill_circuit", name: "Hill Climb Circuit × 10", rounds: 10, cue: "Run up the hill at 60–70% effort. Jog back down. At the bottom perform 10 squats, 10 press ups, 10 sit ups. Rest 1 minute. Repeat 10 times. RPE should never exceed level 8." }
        ]
      },
      {
        day: 4,
        title: "Interval Run + Bodyweight",
        summary: "4 × 800m at high intensity, then max effort bodyweight",
        session: [
          { type: "run", name: "Warm Up", duration: 300, rpe: 3, cue: "5 minute warm up jog." },
          { type: "interval_block", name: "800m Intervals", rounds: 4, intervals: [
            { name: "Run 800m", duration: 240, rpe: "8-9", cue: "Run 800 metres at 80–90% max heart rate. This should be hard." },
            { name: "Walk 400m", duration: 180, rpe: 2, cue: "Walk 400 metres. Let your breathing recover." }
          ], rest: 0 },
          { type: "rest", name: "Rest", duration: 120, cue: "2 minute rest before bodyweight." },
          { type: "max_effort", name: "Press Ups — Best Effort", cue: "Maximum press ups after a hard run. See what you've got." },
          { type: "rest", name: "Rest", duration: 90, cue: "1 minute 30 rest." },
          { type: "max_effort", name: "Sit Ups — Best Effort", cue: "Maximum sit ups." },
          { type: "rest", name: "Rest", duration: 90, cue: "1 minute 30 rest." },
          { type: "max_effort", name: "Pull Ups — Best Effort", cue: "Maximum pull ups. Full range of motion." },
          { type: "rest", name: "Rest", duration: 90, cue: "1 minute 30 rest." },
          { type: "max_effort", name: "Dead Hang", cue: "Hang from the pull up bar with straight arms for as long as you can. Time yourself." }
        ]
      },
      {
        day: 5,
        title: "Circuit 2",
        summary: "Full bodyweight circuit — 3 rounds",
        circuit: "circuit2"
      },
      { day: "6-7", title: "Rest & Recovery", summary: "Final rest days. You've completed the programme.", rest: true }
    ]
  }
];
