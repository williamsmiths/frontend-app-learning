import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  completed: {
    id: 'learning.celebration.completed',
    defaultMessage: 'Bạn vừa hoàn thành phần đầu tiên của khóa học.',
    description: 'Shown only once to leaner when they complete their first section',
  },
  congrats: {
    id: 'learning.celebration.congrats',
    defaultMessage: 'Congratulations!',
    description: 'Greeting for learners when they complete their weekly goal or finish the first section',
  },
  earned: {
    id: 'learning.celebration.earned',
    defaultMessage: 'Bạn xứng đáng với thành quả này!',
    description: 'Shown below congrats messaging when leaner complete a goal',
  },
  emailSubject: {
    id: 'learning.celebration.emailSubject',
    defaultMessage: "Tôi đang trên hành trình hoàn thành {title} trực tuyến với {platform}!",
    description: 'Subject when sharing course progress via email',
  },
  forward: {
    id: 'learning.celebration.forward',
    defaultMessage: 'Tiếp tục thôi',
    description: 'Button to close celebration dialog and get back to course',
  },
  goalMet: {
    id: 'learning.celebration.goalMet',
    defaultMessage: 'Bạn đã đạt được mục tiêu!',
    description: 'Headline for (weekly gaol celebration) section in courseware',
  },
  keepItUp: {
    id: 'learning.celebration.keepItUp',
    defaultMessage: 'Hãy giữ vững phong độ',
    description: 'Button to close celebration dialog and get back to course',
  },
  share: {
    id: 'learning.celebration.share',
    defaultMessage: 'Hãy dành chút thời gian để ăn mừng và chia sẻ tiến trình học tập của bạn.',
    description: 'Text that precedes the (sharing icon) for goal accomplishment ',
  },
  socialMessage: {
    id: 'learning.celebration.social',
    defaultMessage: 'Tôi đang trên hành trình hoàn thành {title} trực tuyến với {platform}. Còn bạn, bạn đang học gì?',
    description: 'Shown when sharing course progress on a social network',
  },
});

export default messages;