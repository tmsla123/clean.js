// 전체 소스를 빌드할거에요.
// 빌드하면 clean.js가 생성되게 해놨어요.
// 이것도 얼마든 수정 가능해요. 팍팍!

var
// 소스 코드 목록을 저장하구 있는 배열이에요~!
sources = [],

// 만약 새로운 기능을 만들었는데 clean.js 배포판에 반영하고 싶다면
// yeah(파일경로); 로 추가해주세요!
// 파일경로는 source 폴더와 .js 확장자는 빼고 작성해주세요!
yeah = function(path) {
	sources.push(path);
};

yeah('core');
