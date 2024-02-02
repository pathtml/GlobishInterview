export interface Question {
    title: string;
    q: string;
    options: Option[];
}

export interface Option {
    option: string;
    score: number;
}

const questions : Question[] = [
    {
      title: 'Q1',
      q: 'ถ้าวันนี้เป็นวันหยุด คุณจะ...',
      options: [
        { option: 'นอนเล่น พักผ่อน', score: 10 },
        { option: 'ดูหนัง ดูซีรี่ส์ เล่นเกม', score: 20 },
        { option: 'เรียนรู้อะไรใหม่ๆ ', score: 30 },
      ]
    },
    {
      title: 'Q2',
      q: 'คุณต้องการพัฒนาภาษาอังกฤษเพื่ออะไร?',
      options: [
        { option: 'การทำงาน', score: 30 },
        { option: 'เที่ยวต่่างประเทศ', score: 10 },
        { option: 'ใช้ในชีวิตประจำวัน', score: 20 },
      ]
    },
    {
      title: 'Q3',
      q: 'สไตล์การเรียนภาษาอังกฤษของคุณเป็นแบบไหน',
      options: [
        { option: 'เรียนคอร์สออนไลน์', score: 30 },
        { option: 'เรียนด้วยตนเอง เชน อ่านหนังสือ ดูหนัง ฟังเพลง', score: 20 },
        { option: 'คุยกับเพื่อนต่างชาติ / ไปเที่ยวต่างประเทศ', score: 10 },
      ]
    },
    {
      title: 'Q4',
      q: 'คุณใช้ภาษาอังกฤษบ่อยแค่ไหน?',
      options: [
        { option: 'เป็นประจำทุกวัน', score: 30 },
        { option: 'เป็นบางครั้ง', score: 10 },
        { option: 'นานๆที / ไม่ได้ใช้เลย', score: 20 },
      ]
    },
    {
      title: 'Q5',
      q: 'คุณอยากพัฒนาสกิลภาษาอังกฤษสกิลไหนมากที่สุด',
      options: [
        { option: 'การฟัง', score: 20 },
        { option: 'การพูด', score: 10 },
        { option: 'การเขียน', score: 30 },
      ]
    },
    {
      title: 'Q6',
      q: 'อยากเรียนภาษาอังกฤษ แต่...',
      options: [
        { option: 'ไม่มีเวลา', score: 20 },
        { option: 'เนื้อหาไม่น่าสนใจ / สอนไม่สนุก', score: 10 },
        { option: 'ไม่มั่นใจ', score: 30 },
      ]
    },
    {
      title: 'Q7',
      q: 'คุณรู้จัก Globish ผ่านช่องทางใด (เลือกได้มากกว่า 1 ข้อ)',
      options: [
        { option: 'Instagram', score: 0 },
        { option: 'Facebook', score: 0 },
      ]
    }
  ]

export default questions