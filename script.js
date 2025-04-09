document.addEventListener('DOMContentLoaded', function() {
    // 혜택 섹션 데이터
    const benefitsData = [
        {
            icon: 'fa-lightbulb',
            bgColor: 'bg-blue-50',
            iconBgColor: 'bg-blue-100',
            iconColor: 'text-blue-600',
            title: '혁신적 아이디어',
            description: '창의적인 AI 활용 아이디어로 회사의 미래를 함께 만들어가요'
        },
        {
            icon: 'fa-chart-line',
            bgColor: 'bg-pink-50',
            iconBgColor: 'bg-pink-100',
            iconColor: 'text-pink-600',
            title: '업무 효율성 향상',
            description: 'AI를 통해 반복적인 업무를 자동화하고 핵심 업무에 집중하세요'
        },
        {
            icon: 'fa-users',
            bgColor: 'bg-green-50',
            iconBgColor: 'bg-green-100',
            iconColor: 'text-green-600',
            title: '팀워크 강화',
            description: '함께 고민하고 만드는 AI 솔루션으로 더 나은 근무 환경을 만들어요'
        }
    ];

    // 성공 사례 데이터
    const successCasesData = [
        {
            imageUrl: 'https://picsum.photos/id/68/800/600',
            company: '신한은행',
            industry: '금융 서비스',
            tagType: '국내 사례',
            tagBg: 'bg-blue-100',
            tagText: 'text-blue-600',
            resultTag: '85% 시간 단축',
            resultBg: 'bg-yellow-100',
            resultText: 'text-yellow-600',
            description: '대출 심사 자동화 AI 도입으로 처리 시간 85% 단축, 정확도 12% 향상'
        },
        {
            imageUrl: 'https://picsum.photos/id/48/800/600',
            company: '포스코',
            industry: '인사 영역',
            tagType: '국내 사례',
            tagBg: 'bg-blue-100',
            tagText: 'text-blue-600',
            resultTag: '인재 매칭 최적화',
            resultBg: 'bg-green-100',
            resultText: 'text-green-600',
            description: 'AI 기반 인재 배치 시스템으로 직무 만족도 32% 향상, 이직률 18% 감소 효과'
        },
        {
            imageUrl: 'https://picsum.photos/id/3/800/600',
            company: '롯데마트',
            industry: '유통 산업',
            tagType: '국내 사례',
            tagBg: 'bg-blue-100',
            tagText: 'text-blue-600',
            resultTag: '63% 오류 감소',
            resultBg: 'bg-red-100',
            resultText: 'text-red-600',
            description: '재고 관리 AI 자동화로 발주 오류 63% 감소, 재고 비용 연간 11억 절감'
        },
        {
            imageUrl: 'https://picsum.photos/id/534/800/600',
            company: '골드만삭스',
            industry: '금융 서비스',
            tagType: '글로벌 사례',
            tagBg: 'bg-purple-100',
            tagText: 'text-purple-600',
            resultTag: '36만 시간 절감',
            resultBg: 'bg-orange-100',
            resultText: 'text-orange-600',
            description: '법률 문서 검토 AI 자동화로 연간 36만 시간 절감, 인적 오류 75% 감소'
        },
        {
            imageUrl: 'https://picsum.photos/id/26/800/600',
            company: '유니레버',
            industry: '소비재 산업',
            tagType: '글로벌 사례',
            tagBg: 'bg-purple-100',
            tagText: 'text-purple-600',
            resultTag: '70% 시간 단축',
            resultBg: 'bg-pink-100',
            resultText: 'text-pink-600',
            description: '채용 프로세스 AI 도입으로 심사 시간 70% 단축, 지원자 만족도 16% 상승'
        },
        {
            imageUrl: 'https://picsum.photos/id/237/800/600',
            company: '지멘스',
            industry: '제조 산업',
            tagType: '글로벌 사례',
            tagBg: 'bg-purple-100',
            tagText: 'text-purple-600',
            resultTag: '20% 에너지 절감',
            resultBg: 'bg-teal-100',
            resultText: 'text-teal-600',
            description: '공장 에너지 사용 AI 최적화로 전력 소비 20% 감소, 연간 운영비 3.6백만 유로 절감'
        }
    ];

    // 제출 단계 데이터
    const submissionStepsData = [
        {
            number: '01',
            title: '현재 상황 분석',
            items: [
                '업무의 현재 프로세스와 소요 시간',
                '기존 방식의 한계점'
            ]
        },
        {
            number: '02',
            title: 'AI 활용 제안 방안',
            items: [
                '어떤 AI 기술을 어떻게 적용할 것인지',
                '참고할 수 있는 유사 사례'
            ]
        },
        {
            number: '03',
            title: '구체적 실행 방안',
            items: [
                '실제 구현을 위한 단계별 접근법',
                '필요한 리소스 및 예상 개발 기간'
            ]
        },
        {
            number: '04',
            title: '예상되는 변화와 효과',
            items: [
                '시간 절감 효과 (정량적 수치)',
                '비용 절감 효과 (정량적 수치)',
                '업무 품질 개선 효과',
                '제안의 효과성에 대한 객관적 근거'
            ]
        }
    ];

    // 보상 데이터
    const rewardsData = [
        {
            icon: 'fa-award',
            title: '채택 시 특전',
            description: '절감 비용의 1%<br>(최대 100만원) 인센티브<br>+ 승진평가 시 가점'
        },
        {
            icon: 'fa-coffee',
            title: '참가자 전원',
            description: '신규 제안 시<br>커피 기프티콘 증정'
        }
    ];

    // 혜택 섹션 렌더링
    const benefitsContainer = document.getElementById('benefits-container');
    benefitsData.forEach(benefit => {
        benefitsContainer.innerHTML += `
            <div class="${benefit.bgColor} rounded-xl p-6 text-center transition-all duration-300 card-hover">
                <div class="${benefit.iconBgColor} w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <i class="fas ${benefit.icon} ${benefit.iconColor} text-2xl"></i>
                </div>
                <h3 class="text-xl font-semibold mb-3 text-gray-800">${benefit.title}</h3>
                <p class="text-gray-600">${benefit.description}</p>
            </div>
        `;
    });

    // 성공 사례 섹션 렌더링
    const successCasesContainer = document.getElementById('success-cases-container');
    successCasesData.forEach(successCase => {
        successCasesContainer.innerHTML += `
            <div class="bg-white rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl card-hover group">
                <div class="h-48 overflow-hidden relative">
                    <img src="${successCase.imageUrl}" alt="${successCase.company} AI 사례" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                    <div class="absolute bottom-0 left-0 p-4 text-white">
                        <h4 class="font-bold text-xl">${successCase.company}</h4>
                        <p class="text-sm text-gray-200">${successCase.industry}</p>
                    </div>
                </div>
                <div class="p-6">
                    <div class="flex items-center gap-2 mb-4">
                        <span class="${successCase.tagBg} ${successCase.tagText} text-xs font-semibold px-3 py-1 rounded-full">${successCase.tagType}</span>
                        <span class="${successCase.resultBg} ${successCase.resultText} text-xs font-semibold px-3 py-1 rounded-full">${successCase.resultTag}</span>
                    </div>
                    <p class="text-gray-600">${successCase.description}</p>
                </div>
            </div>
        `;
    });

    // 제출 단계 섹션 렌더링
    const submissionStepsContainer = document.getElementById('submission-steps-container');
    submissionStepsData.forEach(step => {
        let items = '';
        step.items.forEach(item => {
            items += `
                <li class="flex items-start gap-2">
                    <i class="fas fa-check-circle text-blue-500 mt-1"></i>
                    <span>${item}</span>
                </li>
            `;
        });

        submissionStepsContainer.innerHTML += `
            <div class="flex flex-col md:flex-row items-center gap-6 relative step-card">
                <div class="w-24 h-24 rounded-full bg-blue-600 text-white text-3xl font-bold flex items-center justify-center shrink-0 z-10">${step.number}</div>
                <div class="bg-white shadow-lg rounded-xl p-6 md:p-8 w-full">
                    <h3 class="text-xl text-blue-700 font-bold mb-4">${step.title}</h3>
                    <ul class="space-y-3 text-gray-600">
                        ${items}
                    </ul>
                </div>
            </div>
        `;
    });

    // 보상 섹션 렌더링
    const rewardsContainer = document.getElementById('rewards-container');
    rewardsData.forEach(reward => {
        rewardsContainer.innerHTML += `
            <div class="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-opacity-20 transition-all duration-300">
                <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-white flex items-center justify-center">
                    <i class="fas ${reward.icon} text-3xl text-blue-600"></i>
                </div>
                <h3 class="text-xl font-semibold mb-3">${reward.title}</h3>
                <p class="text-blue-100">${reward.description}</p>
            </div>
        `;
    });
});