import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  assignmentType: {
    id: 'progress.assignmentType',
    defaultMessage: 'Loại bài tập',
    description: 'Header for column that indicate type of the assignment in grade summary table',
  },
  backToContent: {
    id: 'progress.footnotes.backToContent',
    defaultMessage: 'Quay lại nội dung',
    description: 'Text for button that redirects to contnet',
  },
  courseGradeBody: {
    id: 'progress.courseGrade.body',
    defaultMessage: 'Điều này thể hiện điểm trung bình có trọng số của bạn so với điểm cần đạt để vượt qua khóa học này.',
    description: 'This text is shown to explain the meaning of the (grade bar) chart',
  },
  courseGradeBarAltText: {
    id: 'progress.courseGrade.gradeBar.altText',
    defaultMessage: 'Điểm hiện tại của bạn là {currentGrade}%. Điểm có trọng số {passingGrade}% là cần thiết để vượt qua khóa học này.',
    description: 'Alt text for the grade chart bar',
  },
  courseGradeFooterGenericPassing: {
    id: 'progress.courseGrade.footer.generic.passing',
    defaultMessage: 'Hiện tại bạn đang vượt qua khóa học này',
    description: 'This shown when learner weighted grade is greater or equal course passing grade',
  },
  courseGradeFooterNonPassing: {
    id: 'progress.courseGrade.footer.nonPassing',
    defaultMessage: 'Điểm có trọng số {passingGrade}% là cần thiết để vượt qua khóa học này',
    description: 'This shown when learner weighted grade is less than course passing grade',
  },
  courseGradeFooterPassingWithGrade: {
    id: 'progress.courseGrade.footer.passing',
    defaultMessage: 'Hiện tại bạn đang vượt qua khóa học này với điểm {letterGrade} ({minGrade}-{maxGrade}%)',
    description: 'This shown when learner weighted grade is greater or equal course passing grade amd course is using letter grade',
  },
  courseGradePreviewHeaderLocked: {
    id: 'progress.courseGrade.preview.headerLocked',
    defaultMessage: 'tính năng bị khóa',
    description: 'This when (progress page) feature is locked, sometimes learner needs to upgrade to get insight about their progress',
  },
  courseGradePreviewHeaderLimited: {
    id: 'progress.courseGrade.preview.headerLimited',
    defaultMessage: 'tính năng hạn chế',
    description: 'This when (progress page) feature is partially locked, it means leaners can see their progress but not get to a certificate',
  },
  courseGradePreviewHeaderAriaHidden: {
    id: 'progress.courseGrade.preview.header.ariaHidden',
    defaultMessage: 'Xem trước của ',
    description: 'This text precedes either (locked feature) or (limited feature)',
  },
  courseGradePreviewUnlockCertificateBody: {
    id: 'progress.courseGrade.preview.body.unlockCertificate',
    defaultMessage: 'Mở khóa để xem điểm và tiến tới nhận chứng chỉ.',
    description: 'Recommending an action for learner when they need to upgrade to view progress and get a certificate',
  },
  courseGradePartialPreviewUnlockCertificateBody: {
    id: 'progress.courseGrade.partialpreview.body.unlockCertificate',
    defaultMessage: 'Mở khóa để tiến tới nhận chứng chỉ.',
    description: 'Recommending an action for learner when they need to upgrade to get a certificate',
  },
  courseGradePreviewUpgradeDeadlinePassedBody: {
    id: 'progress.courseGrade.preview.body.upgradeDeadlinePassed',
    defaultMessage: 'Hạn chót để nâng cấp khóa học này đã kết thúc.',
    description: 'Shown when learner no longer can upgrade',
  },
  courseGradePreviewUpgradeButton: {
    id: 'progress.courseGrade.preview.button.upgrade',
    defaultMessage: 'Nâng cấp ngay',
    description: 'Text for button that redirects to the upgrade page',
  },
  courseGradeRangeTooltip: {
    id: 'progress.courseGrade.gradeRange.tooltip',
    defaultMessage: 'Khoảng điểm cho khóa học này:',
    description: 'This shown when course is using (letter grade) to explain e.g. range for A, B, and C...etc',
  },
  courseOutline: {
    id: 'progress.courseOutline',
    defaultMessage: 'Đề cương khóa học',
    description: 'Anchor text for link that redirects to (course outline) tab',
  },
  currentGradeLabel: {
    id: 'progress.courseGrade.label.currentGrade',
    defaultMessage: 'Điểm hiện tại của bạn',
    description: 'Text label current leaner grade on (grade bar) chart',
  },
  detailedGrades: {
    id: 'progress.detailedGrades',
    defaultMessage: 'Điểm chi tiết',
    description: 'Headline for the (detailed grade) section in the progress tab',
  },
  detailedGradesEmptyOnlyGraded: {
    id: 'progress.detailedGrades.emptyTable',
    defaultMessage: 'Hiện tại bạn chưa có điểm bài tập được chấm.',
    description: 'It indicate that there are no graded problem or assignments to be scored',
  },
  detailedGradesEmpty: {
    id: 'progress.detailedGrades.including-ungraded.emptyTable',
    defaultMessage: 'Hiện tại bạn chưa có điểm bài tập được chấm hoặc chưa chấm.',
    description: 'It indicate that there are no problem or assignments to be scored',
  },
  footnotesTitle: {
    id: 'progress.footnotes.title',
    defaultMessage: 'Ghi chú tóm tắt điểm',
    description: 'Title for grade summary footnotes, if exists',
  },
  grade: {
    id: 'progress.gradeSummary.grade',
    defaultMessage: 'Điểm',
    description: 'Headline for (grade column) in grade summary table',
  },
  grades: {
    id: 'progress.courseGrade.grades',
    defaultMessage: 'Điểm số',
    description: 'Headline for grades section in progress tab',
  },
  gradesAndCredit: {
    id: 'progress.courseGrade.gradesAndCredit',
    defaultMessage: 'Điểm & Tín chỉ',
    description: 'Headline for (grades and credit) section in progress tab',
  },
  gradeRangeTooltipAlt: {
    id: 'progress.courseGrade.gradeRange.Tooltip',
    defaultMessage: 'Chú giải khoảng điểm',
    description: 'Alt text for icon which that triggers (tip box) for grade range',
  },
  gradeSummary: {
    id: 'progress.gradeSummary',
    defaultMessage: 'Tóm tắt điểm',
    description: 'Headline for the (grade summary) section in (grades) section in progress tab',
  },
  gradeSummaryLimitedAccessExplanation: {
    id: 'progress.gradeSummary.limitedAccessExplanation',
    defaultMessage: 'Bạn có quyền truy cập hạn chế vào các bài tập đã chấm theo dạng audit trong khóa học này. {upgradeLink}',
    description: 'Text shown when learner has limited access to grade feature',
  },
  gradeSummaryTooltipAlt: {
    id: 'progress.gradeSummary.tooltip.alt',
    defaultMessage: 'Chú giải tóm tắt điểm',
    description: 'Alt text for icon which that triggers (tip box) for grade summary',
  },
  gradeSummaryTooltipBody: {
    id: 'progress.gradeSummary.tooltip.body',
    defaultMessage: 'Trọng số bài tập trong khóa học được quyết định bởi giảng viên. '
      + 'Bằng cách nhân điểm của bạn với trọng số cho loại bài tập đó, điểm có trọng số được tính toán. '
      + 'Điểm có trọng số của bạn được sử dụng để xác định bạn có vượt qua khóa học hay không.',
    description: 'The content of (tip box) for the grade summary section',
  },
  noAccessToAssignmentType: {
    id: 'progress.noAcessToAssignmentType',
    defaultMessage: 'Bạn không có quyền truy cập các bài tập loại {assignmentType}',
    description: 'Its alt text for locked icon which is shown if assignment type in (grade summary table) is locked',
  },
  noAccessToSubsection: {
    id: 'progress.noAcessToSubsection',
    defaultMessage: 'Bạn không có quyền truy cập phân đoạn {displayName}',
    description: 'Text shown when learner have limited access to grades feature',
  },
  passingGradeLabel: {
    id: 'progress.courseGrade.label.passingGrade',
    defaultMessage: 'Điểm đạt',
    description: 'Label for mark on the (grade bar) chart which indicate the poisition of passing grade on the bar',
  },
  gradedScoreLabel: {
    id: 'progress.detailedGrades.problemScore.label',
    defaultMessage: 'Điểm đã chấm:',
    description: 'Label text which precedes detailed view of all scores per assignment',
  },
  practiceScoreLabel: {
    id: 'progress.detailedGrades.practice.problemScore.label',
    defaultMessage: 'Điểm luyện tập:',
    description: 'Label text which precedes detailed view of all ungraded problem scores per assignment',
  },
  problemScoreToggleAltText: {
    id: 'progress.detailedGrades.problemScore.toggleButton',
    defaultMessage: 'Chuyển đổi điểm chi tiết cho {subsectionTitle}',
    description: 'Alt text for button which switches detailed view per module',
  },
  sectionGradeOverridden: {
    id: 'progress.detailedGrades.overridden',
    defaultMessage: 'Điểm phân đoạn đã bị thay đổi.',
    description: 'This indicate that the graded score has been changed, it can happen if leaner initial assessment was not fair, might be for other reasons as well',
  },
  score: {
    id: 'progress.score',
    defaultMessage: 'Điểm số',
    description: 'It indicate how many points the learner have socred scored in particular assignment, or exam',
  },
  weight: {
    id: 'progress.weight',
    defaultMessage: 'Trọng số',
    description: 'It indicate the weight of particular assignment on overall course grade, it is demeterined by course author',
  },
  weightedGrade: {
    id: 'progress.weightedGrade',
    defaultMessage: 'Điểm có trọng số',
    description: 'Weighed grade is calculated by (weight %) * (grade score) ',
  },
  weightedGradeSummary: {
    id: 'progress.weightedGradeSummary',
    defaultMessage: 'Tóm tắt điểm có trọng số hiện tại của bạn',
    description: 'It the text precede the sum of weighted grades of all the assignment',
  },
  weightedGradeSummaryTooltip: {
    id: 'progress.weightedGradeSummary',
    defaultMessage: 'Tổng điểm có trọng số thô của bạn là {rawGrade} và làm tròn thành {roundedGrade}.',
    description: 'Tooltip content that explains the rounding of the summary versus individual assignments',
  },
  practiceScoreInfoText: {
    id: 'progress.detailedGrades.practice-label.info.text',
    defaultMessage: 'Điểm từ các hoạt động không chấm điểm dùng cho luyện tập và tự đánh giá.',
    description: 'Information text about non-graded practice score label',
  },
  gradedScoreInfoText: {
    id: 'progress.detailedGrades.problem-label.info.text',
    defaultMessage: 'Điểm từ các hoạt động được tính vào điểm cuối khóa của bạn.',
    description: 'Information text about graded problem score label',
  },
  ungradedAlert: {
    id: 'progress.ungradedAlert',
    defaultMessage: 'Để xem tiến độ các phần chưa chấm điểm của khóa học, xem {outlineLink}.',
    description: 'Text that precede link that redirect to course outline page',
  },
  droppableAssignmentsText: {
    id: 'progress.footnotes.droppableAssignments',
    defaultMessage: 'Điểm thấp nhất của {numDroppable, plural, one{# {assignmentType}} other{# {assignmentType}}} sẽ bị bỏ qua.',
    description: 'Footnote text stating how many assignments are dropped',
  },
});

export default messages;