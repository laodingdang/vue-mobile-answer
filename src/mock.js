import M from "mockjs";

M.mock("/mock/getTopic", () => {
  let list = [];
  for (let i = 0; i < 5; i++) {
    list.push({
      topic_id: i,
      active_topic_id: 4,
      topic_name: `题目${i + 1}`,
      active_id: 1,
      active_title: `问题${i + 1}，${i}+${i}等于几`,
      active_topic_phase: "第一周",
      active_start_tiem: "1479139200",
      acrive_end_time: "1479139200",
      topic_answer: [
        {
          topic_answer_id: 1,
          topic_id: i,
          answer_name: `选项1`,
          is_standard_answer: 0
        },
        {
          topic_answer_id: 2,
          topic_id: i,
          answer_name: `选项2`,
          is_standard_answer: 1
        },
        {
          topic_answer_id: 3,
          topic_id: i,
          answer_name: `选项3`,
          is_standard_answer: 0
        },
        {
          topic_answer_id: 4,
          topic_id: i,
          answer_name: `选项4`,
          is_standard_answer: 0
        }
      ]
    });
  }
  return list;
});
