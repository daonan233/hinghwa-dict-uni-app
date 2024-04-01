/**
 * 前往随机跳题
 */
export function toRandomQuizPage() {
  uni.navigateTo({
    url: '/pages/quizzes/random',
  });
}

/**
 * 前往试卷页面
 */
export function toTestPage() {
  uni.navigateTo({
    url: '/pages/quizzes/tests/answer',
  });
}

/**
 * 前往海报页面
 */
export function toPosterPage(totalScore) {
  uni.navigateTo({
    url: `/pages/quizzes/tests/score?totalScore=${totalScore}`,
  });
}

/**
 * 前往单个测试页面
 */
export function toOneQuizPage(id) {
  uni.navigateTo({
    url: `/pages/quizzes/details?id=${id}`,
  });
}

/**
 * 前往搜索测试页面
 */
export function toSearchQuizPage() {
  uni.navigateTo({
    url: '/pages/quizzes/search',
  });
}

/**
 * 前往组卷测试界面 3.0增加
 */
export function toPaperPage() {
  uni.navigateTo({
    url: '/pages/quizzes/quizzset/index',
  });
  console.log(111);
}

/**
 * 前往组卷详情页面 3.0增加
 */
export function navigatorToDetail(paperId) {
  uni.navigateTo({
    url: `/pages/quizzes/quizzset/detail?id=${paperId}`,
  });
}

/**
 * 前往卷子答题记录页面 3.0增加
 */
export function gotoAllRecords() {
  uni.navigateTo({
    url: '/pages/quizzes/quizzset/records/index',
  });
}

/**
 * 前往卷子特定答题记录页面 3.0增加
 */
export function gotoRecordDetail(rid) {
  uni.navigateTo({
    url: `/pages/quizzes/quizzset/records/detail?id=${rid}`,
  });
}

export function gotoQuestionCard(paperId) {
  uni.navigateTo({
    url: `/pages/quizzes/quizzset/questionCard?id=${paperId}`,
  });
}
