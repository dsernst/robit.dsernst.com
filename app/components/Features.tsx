export default function Features() {
  const features = [
    {
      command: '/gpt',
      title: 'Ask GPT',
      description: 'ask GPT questions in your groupchat',
    },
    {
      command: '/bet',
      title: 'Prediction Markets',
      description:
        "record disagreeing predictions about the future. measure everyone's accuracy. improve your calibration",
    },
    {
      command: '/remindme',
      title: 'Reminders',
      description: 'set reminders',
    },
    {
      command: '/vote',
      title: 'Private Voting',
      description: 'let people weigh in privately',
    },
    {
      command: '/math',
      title: 'Calculator',
      description: 'calculator',
    },
    {
      command: '/chill',
      title: 'Moderation',
      description: 'ask another user to chill out (moderate)',
    },
  ]

  return (
    <div className="w-full max-w-4xl px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Possible Features, which are your favorite?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature) => (
          <div
            key={feature.command}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-200"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg font-mono text-blue-400">
                {feature.command}
              </span>
              <span className="text-lg font-semibold">{feature.title}</span>
            </div>
            <p className="text-sm text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
