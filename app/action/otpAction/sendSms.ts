import twilio from 'twilio'

const generateSixDigitNumber = async () => {
  return Math.floor(100000 + Math.random() * 900000)
}

export const sendSms = async (number: string) => {
  const otpNumber =await generateSixDigitNumber()
  const client = twilio(process.env.NEXT_TWILIO_SID, process.env.NEXT_TWILIO_TOKEN)

  client.messages.create({
    from: '+6281297496456',
    to: number,
    body: `Your OTP Verification number is ${otpNumber}. Do not share this number to anyone!`
  })

  return otpNumber
}