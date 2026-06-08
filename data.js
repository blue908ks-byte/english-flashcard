const WORDS = [
  {
    "group": "특징-구별됨, 독특함",
    "word": "feature",
    "meaning": "특징",
    "example": "The typical exemplars share more features with other category members.",
    "translation": "전형적인 사례들은 같은 범주의 다른 구성원들과 더 많은 특징을 공유한다."
  },
  {
    "group": "특징-구별됨, 독특함",
    "word": "attribute",
    "meaning": "속성, 특성, 자질",
    "example": "Individuals are encouraged to discover their internal attributes such as desires and personal goals.",
    "translation": "개인들은 욕구와 개인적 목표 같은 내적 특성을 발견하도록 장려된다."
  },
  {
    "group": "특징-구별됨, 독특함",
    "word": "property",
    "meaning": "속성, 특성",
    "example": "Wool has excellent properties for clothing.",
    "translation": "양모는 의류 소재로서 뛰어난 특성을 지니고 있다."
  },
  {
    "group": "특징-구별됨, 독특함",
    "word": "characteristic",
    "meaning": "특징, 특성",
    "example": "Dolphins exhibit sophisticated characteristics.",
    "translation": "돌고래는 정교한 특성을 보인다."
  },
  {
    "group": "특징-구별됨, 독특함",
    "word": "distinct",
    "meaning": "뚜렷한, 구별되는, 명확한",
    "example": "There are two quite distinct kinds of memory.",
    "translation": "기억에는 꽤 뚜렷하게 구별되는 두 종류가 있다."
  },
  {
    "group": "특징-구별됨, 독특함",
    "word": "distinctive",
    "meaning": "특유의, 독특한",
    "example": "This flower has a distinctive smell.",
    "translation": "이 꽃은 독특한 냄새가 난다."
  },
  {
    "group": "특징-구별됨, 독특함",
    "word": "distinction",
    "meaning": "구별, 뚜렷한 차이",
    "example": "The distinction between emotion and feeling is important.",
    "translation": "감정과 느낌 사이의 구별은 중요하다."
  },
  {
    "group": "특징-구별됨, 독특함",
    "word": "distinguish",
    "meaning": "구별하다",
    "example": "He cannot distinguish between red and green easily.",
    "translation": "그는 빨간색과 초록색을 쉽게 구별하지 못한다."
  },
  {
    "group": "특징-구별됨, 독특함",
    "word": "distinguished",
    "meaning": "유명한, 성공한, 두드러진",
    "example": "She is a distinguished writer.",
    "translation": "그녀는 저명한 작가이다."
  },
  {
    "group": "특징-구별됨, 독특함",
    "word": "established",
    "meaning": "유명한, 명성 있는",
    "example": "He is an established artist.",
    "translation": "그는 명성이 있는 예술가이다."
  },
  {
    "group": "특징-구별됨, 독특함",
    "word": "illustrious",
    "meaning": "저명한, 유명하고 존경받는",
    "example": "The illustrious journal reports on aging populations.",
    "translation": "그 저명한 학술지는 고령 인구에 대해 보도한다."
  },
  {
    "group": "특징-구별됨, 독특함",
    "word": "notorious",
    "meaning": "악명 높은",
    "example": "The company is notorious for paying its bills late.",
    "translation": "그 회사는 대금을 늦게 지급하기로 악명이 높다."
  },
  {
    "group": "다의어-의외의 뜻",
    "word": "end",
    "meaning": "목적, 목표",
    "example": "The experience causes one to feel more energy toward a given end.",
    "translation": "그 경험은 사람이 특정 목표를 향해 더 많은 에너지를 느끼게 한다."
  },
  {
    "group": "다의어-의외의 뜻",
    "word": "means",
    "meaning": "수단, 방법",
    "example": "Civilization provides us with a means of escape.",
    "translation": "문명은 우리에게 도피의 수단을 제공한다."
  },
  {
    "group": "다의어-의외의 뜻",
    "word": "interest",
    "meaning": "이익, 이자",
    "example": "The leader’s conduct is derived less from strategic interests than from integrity.",
    "translation": "그 지도자의 행동은 전략적 이익보다는 진실성에서 더 많이 나온다."
  },
  {
    "group": "다의어-의외의 뜻",
    "word": "count",
    "meaning": "중요하다",
    "example": "Making little changes is what truly counts.",
    "translation": "작은 변화를 만드는 것이 진정으로 중요하다."
  },
  {
    "group": "다의어-의외의 뜻",
    "word": "grasp",
    "meaning": "완전히 이해하다; 이해, 파악",
    "example": "Approximate addition is within grasp of the human unconscious.",
    "translation": "대략적인 덧셈은 인간 무의식이 이해할 수 있는 범위 안에 있다."
  },
  {
    "group": "다의어-의외의 뜻",
    "word": "order",
    "meaning": "순서를 정하다",
    "example": "Our choices proceed by ordering our desires or preferences.",
    "translation": "우리의 선택은 욕구나 선호의 순서를 정함으로써 진행된다."
  },
  {
    "group": "다의어-의외의 뜻",
    "word": "discount",
    "meaning": "무시하다, 선택지에서 제외하다",
    "example": "The ill consequences discount them as options.",
    "translation": "나쁜 결과는 그것들을 선택지에서 제외하게 만든다."
  },
  {
    "group": "다의어-의외의 뜻",
    "word": "account",
    "meaning": "설명, 이야기",
    "example": "Instinct is not very useful in giving accounts of the why of behavior.",
    "translation": "본능은 행동의 이유를 설명하는 데 그다지 유용하지 않다."
  },
  {
    "group": "다의어-의외의 뜻",
    "word": "cover",
    "meaning": "다루다, 포함시키다",
    "example": "Their death was widely covered on British television.",
    "translation": "그들의 죽음은 영국 텔레비전에서 광범위하게 다뤄졌다."
  },
  {
    "group": "다의어-의외의 뜻",
    "word": "practice",
    "meaning": "관행, 관례; 실천, 실행",
    "example": "This legislation may regulate practices such as slaughter or experimentation.",
    "translation": "이 법은 도살이나 실험 같은 관행을 규제할 수 있다."
  },
  {
    "group": "다의어-의외의 뜻",
    "word": "term",
    "meaning": "재임 기간, 학기",
    "example": "Historians described John F. Kennedy’s term as President as Camelot.",
    "translation": "역사가들은 존 F. 케네디의 대통령 재임 기간을 카멀롯이라고 묘사했다."
  },
  {
    "group": "다의어-의외의 뜻",
    "word": "will",
    "meaning": "유언장; 의지",
    "example": "Formal clothes were included in wills.",
    "translation": "정장은 유언장에 포함되기도 했다."
  },
  {
    "group": "다의어-의외의 뜻",
    "word": "bear",
    "meaning": "감당하다, 참다, 낳다",
    "example": "The technology cannot bear the weight of cornucopian dreams.",
    "translation": "그 기술은 풍요로운 꿈들의 무게를 감당할 수 없다."
  },
  {
    "group": "다의어-의외의 뜻",
    "word": "chance",
    "meaning": "기회, 가능성, 우연",
    "example": "Roulette is a game of chance.",
    "translation": "룰렛은 우연의 게임이다."
  },
  {
    "group": "다의어-의외의 뜻",
    "word": "well",
    "meaning": "우물, 유정",
    "example": "The village depends on well water.",
    "translation": "그 마을은 우물물에 의존한다."
  },
  {
    "group": "능력",
    "word": "ability",
    "meaning": "능력(실제로 할 수 있음)",
    "example": "She has the ability to solve problems quickly.",
    "translation": "그녀는 문제를 빨리 해결하는 능력이 있다."
  },
  {
    "group": "능력",
    "word": "capability",
    "meaning": "수행 역량, 성능",
    "example": "The software has advanced capabilities.",
    "translation": "그 소프트웨어는 고급 기능을 갖고 있다."
  },
  {
    "group": "능력",
    "word": "capacity",
    "meaning": "능력, 수용량",
    "example": "He has great intellectual capacity.",
    "translation": "그는 뛰어난 지적 능력을 가지고 있다."
  },
  {
    "group": "능력",
    "word": "competence",
    "meaning": "능력, 자격, 적정성",
    "example": "Professional competence is required.",
    "translation": "직업적 역량이 요구된다."
  },
  {
    "group": "능력",
    "word": "endowment",
    "meaning": "타고난 재능, 능력",
    "example": "Humans are endowed with language.",
    "translation": "인간은 언어 능력을 부여받았다."
  },
  {
    "group": "능력",
    "word": "aptitude",
    "meaning": "능력, 적성",
    "example": "She has an aptitude for mathematics.",
    "translation": "그녀는 수학 적성이 있다."
  },
  {
    "group": "능력",
    "word": "faculty",
    "meaning": "타고난 신체·정신 기능",
    "example": "She has a faculty for inspiring confidence in people.",
    "translation": "그녀는 사람들에게 자신감을 불어넣는 능력이 있다."
  },
  {
    "group": "방해하다",
    "word": "hinder",
    "meaning": "방해하다, 지연시키다",
    "example": "Heavy rain hindered traffic.",
    "translation": "폭우가 교통을 방해했다."
  },
  {
    "group": "방해하다",
    "word": "encumber",
    "meaning": "부담을 줘서 방해하다",
    "example": "The economy was encumbered by debt.",
    "translation": "경제는 부채에 짓눌려 있었다."
  },
  {
    "group": "방해하다",
    "word": "intervene",
    "meaning": "개입하다",
    "example": "The teacher intervened in the fight.",
    "translation": "선생님이 싸움에 개입했다."
  },
  {
    "group": "방해하다",
    "word": "interrupt",
    "meaning": "흐름을 끊다, 중단시키다",
    "example": "Don’t interrupt me.",
    "translation": "내 말을 끊지 마."
  },
  {
    "group": "방해하다",
    "word": "disrupt",
    "meaning": "질서·시스템을 방해하다",
    "example": "The strike disrupted transportation.",
    "translation": "파업이 교통 체계를 마비시켰다."
  },
  {
    "group": "방해하다",
    "word": "disturb",
    "meaning": "평온한 상태를 깨뜨리다",
    "example": "The noise disturbed my sleep.",
    "translation": "소음이 내 잠을 방해했다."
  },
  {
    "group": "방해하다",
    "word": "interfere with",
    "meaning": "간섭하다, 방해하다",
    "example": "Noise interfered with concentration.",
    "translation": "소음이 집중을 방해했다."
  },
  {
    "group": "방해하다",
    "word": "impede",
    "meaning": "진전을 저해하다",
    "example": "Stress impedes memory formation.",
    "translation": "스트레스는 기억 형성을 저해한다."
  },
  {
    "group": "방해하다",
    "word": "hamper",
    "meaning": "활동을 불편하게 하다",
    "example": "Bad weather hampered rescue efforts.",
    "translation": "악천후가 구조 작업을 어렵게 했다."
  },
  {
    "group": "못 나오게, 드러나지 않게 누름/억제/억압",
    "word": "deter",
    "meaning": "심리적으로 단념시키다",
    "example": "High prices deter customers.",
    "translation": "높은 가격이 소비자들을 단념시킨다."
  },
  {
    "group": "못 나오게, 드러나지 않게 누름/억제/억압",
    "word": "inhibit",
    "meaning": "막다, 억제하다",
    "example": "Fear inhibits creativity.",
    "translation": "두려움은 창의성을 억제한다."
  },
  {
    "group": "못 나오게, 드러나지 않게 누름/억제/억압",
    "word": "restrain",
    "meaning": "감정·힘을 억누르다",
    "example": "He could not restrain his anger.",
    "translation": "그는 분노를 억누를 수 없었다."
  },
  {
    "group": "못 나오게, 드러나지 않게 누름/억제/억압",
    "word": "suppress",
    "meaning": "억압하다, 못 나오게 누르다",
    "example": "The regime suppressed free speech.",
    "translation": "정권은 언론의 자유를 억압했다."
  },
  {
    "group": "못 나오게, 드러나지 않게 누름/억제/억압",
    "word": "repress",
    "meaning": "감정을 억누르다; 탄압하다",
    "example": "He repressed a sudden desire to cry.",
    "translation": "그는 갑자기 울고 싶은 마음을 억눌렀다."
  },
  {
    "group": "못 나오게, 드러나지 않게 누름/억제/억압",
    "word": "oppress",
    "meaning": "짓누르다, 탄압하다",
    "example": "The people were oppressed by a ruthless dictator.",
    "translation": "국민들은 무자비한 독재자에게 억압받았다."
  },
  {
    "group": "제한-여기(거기)까지만",
    "word": "constrain",
    "meaning": "범위·선택 폭을 제한하다",
    "example": "Rising energy costs are constraining consumer spending.",
    "translation": "에너지 비용 상승이 소비자 지출을 제한하고 있다."
  },
  {
    "group": "제한-여기(거기)까지만",
    "word": "curb",
    "meaning": "과도한 것을 억제하다",
    "example": "The government tried to curb tax evasion.",
    "translation": "정부는 탈세를 억제하려 노력했다."
  },
  {
    "group": "제한-여기(거기)까지만",
    "word": "restrict",
    "meaning": "허용 범위를 제한하다",
    "example": "Access is restricted.",
    "translation": "접근이 제한된다."
  },
  {
    "group": "제한-여기(거기)까지만",
    "word": "confine",
    "meaning": "범위 안에 국한시키다",
    "example": "Please confine comments to the topic.",
    "translation": "논의를 주제로 제한해라."
  },
  {
    "group": "못하게 막음/차단",
    "word": "obstruct",
    "meaning": "물리적으로 가로막다",
    "example": "A fallen tree obstructed the road.",
    "translation": "쓰러진 나무가 길을 가로막았다."
  },
  {
    "group": "못하게 막음/차단",
    "word": "prevent",
    "meaning": "막다, 방지하다",
    "example": "Vaccines prevent disease.",
    "translation": "백신은 질병을 예방한다."
  },
  {
    "group": "못하게 막음/차단",
    "word": "prohibit",
    "meaning": "금지하다",
    "example": "Parking is strictly prohibited between these gates.",
    "translation": "이 두 게이트 사이에는 주차가 엄격히 금지된다."
  },
  {
    "group": "못하게 막음/차단",
    "word": "forbid",
    "meaning": "금지하다",
    "example": "The law forbids the sale of cigarettes to people under 16.",
    "translation": "그 법은 16세 미만에게 담배 판매를 금지한다."
  },
  {
    "group": "논리적으로 타당한가",
    "word": "valid",
    "meaning": "논리적으로 옳은, 법적으로 유효한",
    "example": "My passport is valid for another two years.",
    "translation": "내 여권은 앞으로 2년 더 유효하다."
  },
  {
    "group": "논리적으로 타당한가",
    "word": "sound",
    "meaning": "내용·근거까지 탄탄한",
    "example": "The book is very sound on the basics.",
    "translation": "이 책은 기초 내용을 매우 탄탄하게 다루고 있다."
  },
  {
    "group": "논리적으로 타당한가",
    "word": "coherent",
    "meaning": "전체가 잘 연결된",
    "example": "She told a coherent story.",
    "translation": "그녀는 일관성 있는 이야기를 했다."
  },
  {
    "group": "논리적으로 타당한가",
    "word": "consistent",
    "meaning": "모순 없는, 한결같은",
    "example": "His behavior was consistent.",
    "translation": "그의 행동은 일관되었다."
  },
  {
    "group": "논리적으로 타당한가",
    "word": "rational",
    "meaning": "이성적, 합리적",
    "example": "It was a rational choice.",
    "translation": "그것은 합리적 선택이었다."
  },
  {
    "group": "말이 됨/그럴듯함/가능성 있음",
    "word": "plausible",
    "meaning": "겉으로 타당해 보이는",
    "example": "That is a plausible explanation.",
    "translation": "그것은 그럴듯한 설명이다."
  },
  {
    "group": "말이 됨/그럴듯함/가능성 있음",
    "word": "convincing",
    "meaning": "설득력 있는",
    "example": "She gave a convincing explanation.",
    "translation": "그녀는 설득력 있는 설명을 했다."
  },
  {
    "group": "말이 됨/그럴듯함/가능성 있음",
    "word": "credible",
    "meaning": "믿을 만한",
    "example": "We need credible evidence.",
    "translation": "우리는 신뢰할 수 있는 증거가 필요하다."
  },
  {
    "group": "말이 됨/그럴듯함/가능성 있음",
    "word": "conceivable",
    "meaning": "상상할 수 있는, 가능성 있는",
    "example": "It is conceivable that he is right.",
    "translation": "그가 옳을 가능성이 있다."
  },
  {
    "group": "말이 됨/그럴듯함/가능성 있음",
    "word": "probable",
    "meaning": "가능성이 큰",
    "example": "It is probable that prices will rise.",
    "translation": "가격이 오를 가능성이 크다."
  },
  {
    "group": "말이 됨/그럴듯함/가능성 있음",
    "word": "feasible",
    "meaning": "실현 가능한",
    "example": "We need a feasible solution.",
    "translation": "우리는 실현 가능한 해결책이 필요하다."
  },
  {
    "group": "납득가능/정당한가/적절한가",
    "word": "reasonable",
    "meaning": "상식적으로 납득 가능한",
    "example": "It was a reasonable decision.",
    "translation": "그것은 합리적인 결정이었다."
  },
  {
    "group": "납득가능/정당한가/적절한가",
    "word": "understandable",
    "meaning": "이해할 수 있는",
    "example": "His reaction was understandable.",
    "translation": "그의 반응은 이해할 만했다."
  },
  {
    "group": "납득가능/정당한가/적절한가",
    "word": "comprehensible",
    "meaning": "이해할 수 있는, 알기 쉬운",
    "example": "Her writing is barely comprehensible to me.",
    "translation": "그녀의 글은 나에게 거의 이해되지 않는다."
  },
  {
    "group": "납득가능/정당한가/적절한가",
    "word": "defensible",
    "meaning": "정당화·옹호 가능한",
    "example": "The policy is morally defensible.",
    "translation": "그 정책은 도덕적으로 옹호될 수 있다."
  },
  {
    "group": "납득가능/정당한가/적절한가",
    "word": "legitimate",
    "meaning": "정당한, 합법적인",
    "example": "He has legitimate authority.",
    "translation": "그는 정당한 권한을 가지고 있다."
  },
  {
    "group": "납득가능/정당한가/적절한가",
    "word": "proper",
    "meaning": "사회·도덕적으로 적절한",
    "example": "That is proper behavior.",
    "translation": "그것은 적절한 행동이다."
  },
  {
    "group": "납득가능/정당한가/적절한가",
    "word": "appropriate",
    "meaning": "상황에 맞는",
    "example": "Is this film appropriate for small children?",
    "translation": "이 영화는 어린아이들에게 적절한가?"
  },
  {
    "group": "납득가능/정당한가/적절한가",
    "word": "justifiable",
    "meaning": "상황상 정당화 가능한",
    "example": "It was a justifiable lie.",
    "translation": "그것은 정당화될 수 있는 거짓말이었다."
  },
  {
    "group": "계속 유지",
    "word": "sustain",
    "meaning": "에너지를 공급하며 계속 유지하다",
    "example": "Exercise sustains growth and health.",
    "translation": "운동은 성장과 건강을 지속시킨다."
  },
  {
    "group": "계속 유지",
    "word": "maintain",
    "meaning": "현재 상태를 변하지 않게 유지하다",
    "example": "He maintained that the earth is flat.",
    "translation": "그는 지구가 평평하다고 주장했다."
  },
  {
    "group": "계속 유지",
    "word": "retain",
    "meaning": "잃지 않고 보유하다",
    "example": "He managed to retain control of the company.",
    "translation": "그는 회사에 대한 지배권을 유지했다."
  },
  {
    "group": "계속 유지",
    "word": "preserve",
    "meaning": "손상되지 않게 보존하다",
    "example": "We must preserve the environment.",
    "translation": "우리는 환경을 보존해야 한다."
  },
  {
    "group": "계속 유지",
    "word": "conserve",
    "meaning": "아껴 보존하다",
    "example": "We should conserve energy.",
    "translation": "우리는 에너지를 절약해야 한다."
  },
  {
    "group": "계속 유지",
    "word": "uphold",
    "meaning": "법·원칙 등을 지지하고 유지하다",
    "example": "The judge upheld the decision.",
    "translation": "판사는 그 판결을 유지했다."
  },
  {
    "group": "계속 존재",
    "word": "remain",
    "meaning": "계속 남아 있다",
    "example": "Problems remain unresolved.",
    "translation": "문제는 여전히 해결되지 않은 채 남아 있다."
  },
  {
    "group": "계속 존재",
    "word": "continue",
    "meaning": "계속하다, 계속되다",
    "example": "She continued to speak.",
    "translation": "그녀는 계속 말했다."
  },
  {
    "group": "계속 존재",
    "word": "persist",
    "meaning": "사라지지 않고 계속되다",
    "example": "Problems persist.",
    "translation": "문제가 계속된다."
  },
  {
    "group": "계속 존재",
    "word": "last",
    "meaning": "일정 기간 계속되다",
    "example": "The meeting lasted two hours.",
    "translation": "회의는 두 시간 동안 계속되었다."
  },
  {
    "group": "계속 존재",
    "word": "survive",
    "meaning": "살아남다, 견뎌내다",
    "example": "He survived the accident.",
    "translation": "그는 사고에서 살아남았다."
  },
  {
    "group": "계속 존재",
    "word": "linger",
    "meaning": "오래 남아 있다",
    "example": "The smell lingered.",
    "translation": "그 냄새가 계속 남아 있었다."
  },
  {
    "group": "계속 존재",
    "word": "outlast",
    "meaning": "~보다 오래가다",
    "example": "This battery outlasts the ordinary kind.",
    "translation": "이 배터리는 일반 배터리보다 더 오래간다."
  },
  {
    "group": "변하지 않는 상태/같은 상태",
    "word": "constant",
    "meaning": "변함없는, 일정한",
    "example": "We ran at a fairly constant speed.",
    "translation": "우리는 꽤 일정한 속도로 달렸다."
  },
  {
    "group": "변하지 않는 상태/같은 상태",
    "word": "perpetual",
    "meaning": "끊임없이 계속되는",
    "example": "They lived in perpetual fear.",
    "translation": "그들은 늘 두려움 속에 살았다."
  },
  {
    "group": "변하지 않는 상태/같은 상태",
    "word": "uniform",
    "meaning": "한결같은, 획일적인",
    "example": "The laws are not uniform among the states.",
    "translation": "그 법률들은 주마다 같지 않다."
  },
  {
    "group": "변하지 않는 상태/같은 상태",
    "word": "rigid",
    "meaning": "경직된, 융통성 없는",
    "example": "They followed rigid rules of behavior.",
    "translation": "그들은 엄격한 행동 규칙을 따랐다."
  },
  {
    "group": "변하지 않는 상태/같은 상태",
    "word": "immutable",
    "meaning": "불변의, 변경할 수 없는",
    "example": "This is an immutable law.",
    "translation": "이것은 불변의 법칙이다."
  },
  {
    "group": "커짐/확산/우세",
    "word": "expand",
    "meaning": "확대하다, 팽창하다",
    "example": "The air in the balloon expands when heated.",
    "translation": "풍선 안의 공기는 가열되면 팽창한다."
  },
  {
    "group": "커짐/확산/우세",
    "word": "grow",
    "meaning": "커지다, 성장하다",
    "example": "Football’s popularity continues to grow.",
    "translation": "축구의 인기는 계속 커지고 있다."
  },
  {
    "group": "커짐/확산/우세",
    "word": "swell",
    "meaning": "부풀다, 급증하다",
    "example": "Immigrants swelled the city’s population.",
    "translation": "이민자들이 도시 인구를 급증시켰다."
  },
  {
    "group": "커짐/확산/우세",
    "word": "inflate",
    "meaning": "부풀리다, 과장하다",
    "example": "The story was inflated by the media.",
    "translation": "그 이야기는 언론에 의해 과장되었다."
  },
  {
    "group": "커짐/확산/우세",
    "word": "mushroom",
    "meaning": "급속히 커지다",
    "example": "The business began to mushroom.",
    "translation": "그 사업은 급속히 성장하기 시작했다."
  },
  {
    "group": "커짐/확산/우세",
    "word": "proliferate",
    "meaning": "급증하다, 빠르게 확산되다",
    "example": "Misinformation has proliferated.",
    "translation": "허위 정보가 빠르게 확산되었다."
  },
  {
    "group": "커짐/확산/우세",
    "word": "propagate",
    "meaning": "전파하다, 번식시키다",
    "example": "Such lies are propagated in the media.",
    "translation": "그러한 거짓말은 언론을 통해 유포된다."
  },
  {
    "group": "커짐/확산/우세",
    "word": "diffuse",
    "meaning": "넓게 퍼뜨리다, 확산되다",
    "example": "Television diffuses knowledge.",
    "translation": "텔레비전은 지식을 전파한다."
  },
  {
    "group": "커짐/확산/우세",
    "word": "pervasive",
    "meaning": "구석구석 퍼져 있는",
    "example": "There is a pervasive sense of anxiety.",
    "translation": "불안감이 곳곳에 퍼져 있다."
  },
  {
    "group": "커짐/확산/우세",
    "word": "prevail",
    "meaning": "우세하다, 결국 이기다, 만연하다",
    "example": "Justice prevailed in the end.",
    "translation": "결국 정의가 승리했다."
  },
  {
    "group": "커짐/확산/우세",
    "word": "prevalent",
    "meaning": "널리 퍼진, 일반적인",
    "example": "Stress is prevalent among teenagers.",
    "translation": "스트레스는 청소년들 사이에 만연해 있다."
  },
  {
    "group": "일치/부합/들어맞음",
    "word": "correspond to",
    "meaning": "구조가 일치하다",
    "example": "The results correspond to the theory.",
    "translation": "결과가 이론과 일치한다."
  },
  {
    "group": "일치/부합/들어맞음",
    "word": "be consistent with",
    "meaning": "모순 없이 일치하다",
    "example": "His actions were consistent with his beliefs.",
    "translation": "그의 행동은 신념과 일치했다."
  },
  {
    "group": "일치/부합/들어맞음",
    "word": "align with",
    "meaning": "방향·입장이 일치하다",
    "example": "Their goals align with ours.",
    "translation": "그들의 목표는 우리와 일치한다."
  },
  {
    "group": "일치/부합/들어맞음",
    "word": "conform to",
    "meaning": "기준에 부합하다",
    "example": "Behavior conforms to social norms.",
    "translation": "행동은 사회 규범에 부합한다."
  },
  {
    "group": "일치/부합/들어맞음",
    "word": "accord with",
    "meaning": "내용이 일치하다",
    "example": "The findings accord with previous studies.",
    "translation": "결과는 이전 연구와 일치한다."
  },
  {
    "group": "일치/부합/들어맞음",
    "word": "coincide with",
    "meaning": "겹쳐서 일치하다",
    "example": "His theory coincides with modern science.",
    "translation": "그의 이론은 현대 과학과 일치한다."
  },
  {
    "group": "일치/부합/들어맞음",
    "word": "square with",
    "meaning": "논리적으로 맞다",
    "example": "The claim does not square with the facts.",
    "translation": "그 주장은 사실과 맞지 않는다."
  },
  {
    "group": "일치/부합/들어맞음",
    "word": "tally with",
    "meaning": "수치·내용이 일치하다",
    "example": "His statement doesn’t tally with the witnesses’.",
    "translation": "그의 진술은 증인들의 진술과 일치하지 않는다."
  },
  {
    "group": "일치/부합/들어맞음",
    "word": "fit",
    "meaning": "딱 맞다, 들어맞다",
    "example": "The data fit the model.",
    "translation": "데이터가 모델과 부합한다."
  },
  {
    "group": "일치/부합/들어맞음",
    "word": "match",
    "meaning": "일치하다, 들어맞다",
    "example": "The description matches reality.",
    "translation": "설명이 현실과 일치한다."
  },
  {
    "group": "일치/부합/들어맞음",
    "word": "be compatible with",
    "meaning": "양립 가능하다",
    "example": "The theory is compatible with the evidence.",
    "translation": "그 이론은 증거와 양립 가능하다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "essential",
    "meaning": "필수적인, 극히 중요한",
    "example": "Water is essential for life.",
    "translation": "물은 생명에 필수적이다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "vital",
    "meaning": "생존 수준으로 필수적인",
    "example": "Sleep is vital for survival.",
    "translation": "수면은 생존에 필수적이다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "indispensable",
    "meaning": "없어서는 안 될",
    "example": "Trust is an indispensable resource.",
    "translation": "신뢰는 필수적인 자원이다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "integral",
    "meaning": "전체 구조의 필수 부분인",
    "example": "Education is an integral part of society.",
    "translation": "교육은 사회의 필수적인 구성요소이다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "fundamental",
    "meaning": "가장 밑바탕이 되는",
    "example": "We learned fundamental principles.",
    "translation": "우리는 기본 원칙을 배웠다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "primary",
    "meaning": "주된, 가장 우선적인",
    "example": "Our primary objective is safety.",
    "translation": "우리의 주된 목표는 안전이다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "principal",
    "meaning": "주된, 주요한",
    "example": "Stress is the principal cause.",
    "translation": "스트레스가 주된 원인이다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "chief",
    "meaning": "주된, 최고위의",
    "example": "The chief problem is cost.",
    "translation": "주요 문제는 비용이다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "main",
    "meaning": "주된, 주요한",
    "example": "The main reason is time.",
    "translation": "주된 이유는 시간이다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "central",
    "meaning": "중심의, 가장 중요한",
    "example": "This is the central issue.",
    "translation": "이것이 핵심 쟁점이다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "key",
    "meaning": "핵심적인",
    "example": "Practice is a key factor.",
    "translation": "연습은 핵심 요인이다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "pivotal",
    "meaning": "중심축이 되는",
    "example": "She was a pivotal figure.",
    "translation": "그녀는 핵심 인물이었다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "uppermost",
    "meaning": "가장 먼저 고려되는",
    "example": "Safety is my uppermost concern.",
    "translation": "안전이 나의 가장 중요한 관심사이다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "foremost",
    "meaning": "가장 앞선, 가장 중요한",
    "example": "He is one of the foremost scientists.",
    "translation": "그는 가장 저명한 과학자 중 한 명이다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "paramount",
    "meaning": "최우선의, 가장 중요한",
    "example": "Safety is paramount.",
    "translation": "안전이 최우선이다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "significant",
    "meaning": "중요한, 의미 있는",
    "example": "The change had significant effects.",
    "translation": "그 변화는 유의미한 효과를 가져왔다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "substantial",
    "meaning": "상당한",
    "example": "There is substantial evidence.",
    "translation": "상당한 증거가 있다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "influential",
    "meaning": "영향력이 큰",
    "example": "It was an influential book.",
    "translation": "그것은 영향력이 큰 책이었다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "critical",
    "meaning": "매우 중요한, 결정적인",
    "example": "Timing is a critical factor.",
    "translation": "시기는 결정적 요소이다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "crucial",
    "meaning": "매우 중요한, 성패를 좌우하는",
    "example": "It was a crucial decision.",
    "translation": "그것은 중대한 결정이었다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "consequential",
    "meaning": "중대한, 결과에 따른",
    "example": "Leaders make consequential decisions.",
    "translation": "지도자들은 중대한 결정을 내린다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "dominant",
    "meaning": "지배적인, 중요한",
    "example": "Competition is the dominant culture.",
    "translation": "경쟁은 지배적인 문화이다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "defining",
    "meaning": "정체성을 결정하는",
    "example": "This is a defining feature.",
    "translation": "이것은 정체성을 결정하는 특징이다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "salient",
    "meaning": "눈에 띄는 핵심적인",
    "example": "These are salient characteristics.",
    "translation": "이것들은 주요 특징이다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "prominent",
    "meaning": "두드러진, 현저한",
    "example": "She played a prominent role.",
    "translation": "그녀는 중요한 역할을 했다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "conspicuous",
    "meaning": "눈에 잘 띄는",
    "example": "He avoided conspicuous consumption.",
    "translation": "그는 과시적 소비를 피했다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "notable",
    "meaning": "주목할 만한",
    "example": "There is a notable difference.",
    "translation": "뚜렷한 차이가 있다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "noticeable",
    "meaning": "눈에 띄는",
    "example": "There was a noticeable improvement.",
    "translation": "눈에 띄는 개선이 있었다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "striking",
    "meaning": "강렬하게 눈에 띄는",
    "example": "This is a striking example.",
    "translation": "이것은 눈에 띄는 사례이다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "marked",
    "meaning": "현저한",
    "example": "There was a marked improvement.",
    "translation": "현저한 개선이 있었다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "remarkable",
    "meaning": "주목할 만한, 놀라운",
    "example": "It was a remarkable achievement.",
    "translation": "그것은 놀라운 성과였다."
  },
  {
    "group": "중요성/핵심성/두드러짐",
    "word": "pronounced",
    "meaning": "뚜렷한, 현저한",
    "example": "The policy had a pronounced effect.",
    "translation": "그 정책은 현저한 효과를 냈다."
  },
  {
    "group": "결과를 낳음/초래함/촉진함/유발함",
    "word": "yield",
    "meaning": "낳다, 산출하다, 초래하다",
    "example": "Hard work yields success.",
    "translation": "노력은 성공을 가져온다."
  },
  {
    "group": "결과를 낳음/초래함/촉진함/유발함",
    "word": "produce",
    "meaning": "생산하다, 낳다",
    "example": "Exercise produces positive effects.",
    "translation": "운동은 긍정적 효과를 낳는다."
  },
  {
    "group": "결과를 낳음/초래함/촉진함/유발함",
    "word": "generate",
    "meaning": "생성하다, 창출하다",
    "example": "The project generated income.",
    "translation": "그 프로젝트는 수입을 창출했다."
  },
  {
    "group": "결과를 낳음/초래함/촉진함/유발함",
    "word": "create",
    "meaning": "만들어내다",
    "example": "Social media creates new opportunities.",
    "translation": "SNS는 새로운 기회를 만들어낸다."
  },
  {
    "group": "결과를 낳음/초래함/촉진함/유발함",
    "word": "cause",
    "meaning": "야기하다",
    "example": "Smoking causes cancer.",
    "translation": "흡연은 암을 유발한다."
  },
  {
    "group": "결과를 낳음/초래함/촉진함/유발함",
    "word": "engender",
    "meaning": "야기하다, 낳다",
    "example": "Trust engenders cooperation.",
    "translation": "신뢰는 협력을 낳는다."
  },
  {
    "group": "결과를 낳음/초래함/촉진함/유발함",
    "word": "spawn",
    "meaning": "낳다, 양산하다",
    "example": "The success spawned many imitators.",
    "translation": "그 성공은 많은 모방자를 낳았다."
  },
  {
    "group": "결과를 낳음/초래함/촉진함/유발함",
    "word": "lead to",
    "meaning": "~로 이어지다",
    "example": "Stress leads to poor sleep.",
    "translation": "스트레스는 수면 부족으로 이어진다."
  },
  {
    "group": "결과를 낳음/초래함/촉진함/유발함",
    "word": "result in",
    "meaning": "결과적으로 ~를 낳다",
    "example": "Poor planning resulted in failure.",
    "translation": "부실한 계획은 실패를 초래했다."
  },
  {
    "group": "결과를 낳음/초래함/촉진함/유발함",
    "word": "bring about",
    "meaning": "초래하다",
    "example": "Technology brought about major changes.",
    "translation": "기술은 큰 변화를 가져왔다."
  },
  {
    "group": "결과를 낳음/초래함/촉진함/유발함",
    "word": "give rise to",
    "meaning": "야기하다, 발생시키다",
    "example": "Competition gave rise to innovation.",
    "translation": "경쟁은 혁신을 낳았다."
  },
  {
    "group": "결과를 낳음/초래함/촉진함/유발함",
    "word": "foster",
    "meaning": "촉진하다, 길러내다",
    "example": "Reading fosters creativity.",
    "translation": "독서는 창의성을 길러준다."
  },
  {
    "group": "결과를 낳음/초래함/촉진함/유발함",
    "word": "promote",
    "meaning": "촉진하다, 증진시키다",
    "example": "Exercise promotes health.",
    "translation": "운동은 건강을 증진시킨다."
  },
  {
    "group": "결과를 낳음/초래함/촉진함/유발함",
    "word": "facilitate",
    "meaning": "용이하게 하다",
    "example": "Technology facilitates communication.",
    "translation": "기술은 의사소통을 쉽게 만든다."
  },
  {
    "group": "결과를 낳음/초래함/촉진함/유발함",
    "word": "trigger",
    "meaning": "촉발하다",
    "example": "The event triggered a debate.",
    "translation": "그 사건은 논쟁을 촉발했다."
  },
  {
    "group": "결과를 낳음/초래함/촉진함/유발함",
    "word": "induce",
    "meaning": "유발하다, 유도하다",
    "example": "Stress can induce anxiety.",
    "translation": "스트레스는 불안을 유발할 수 있다."
  },
  {
    "group": "결과를 낳음/초래함/촉진함/유발함",
    "word": "provoke",
    "meaning": "주로 부정적 반응을 일으키다",
    "example": "His comments provoked anger.",
    "translation": "그의 발언은 분노를 불러일으켰다."
  },
  {
    "group": "결과를 낳음/초래함/촉진함/유발함",
    "word": "evoke",
    "meaning": "감정·기억을 불러일으키다",
    "example": "The song evoked memories.",
    "translation": "그 노래는 추억을 불러일으켰다."
  }
];
