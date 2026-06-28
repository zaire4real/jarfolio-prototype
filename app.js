const icons = {
  dashboard: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 13h7V4H4z"/><path d="M13 20h7V4h-7z"/><path d="M4 20h7v-5H4z"/></svg>',
  ledger: '<svg class="icon" viewBox="0 0 24 24"><path d="M7 3h10a2 2 0 0 1 2 2v16l-3-2-3 2-3-2-3 2-2-1.3V5a2 2 0 0 1 2-2z"/><path d="M8 8h8"/><path d="M8 12h8"/><path d="M8 16h5"/></svg>',
  assets: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 3v18"/><path d="M5 8h14"/><path d="M6 8l-3 6a4 4 0 0 0 8 0z"/><path d="M18 8l-3 6a4 4 0 0 0 8 0z"/></svg>',
  liabilities: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 7h16"/><path d="M6 7v12h12V7"/><path d="M9 11h6"/><path d="M9 15h4"/></svg>',
  settings: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/><path d="M19.4 15a1.8 1.8 0 0 0 .4 2l.1.1a2.1 2.1 0 0 1-3 3l-.1-.1a1.8 1.8 0 0 0-2-.4 1.8 1.8 0 0 0-1 1.6V21a2.1 2.1 0 0 1-4.2 0v-.2a1.8 1.8 0 0 0-1-1.6 1.8 1.8 0 0 0-2 .4l-.1.1a2.1 2.1 0 0 1-3-3l.1-.1a1.8 1.8 0 0 0 .4-2 1.8 1.8 0 0 0-1.6-1H3a2.1 2.1 0 0 1 0-4.2h.2a1.8 1.8 0 0 0 1.6-1 1.8 1.8 0 0 0-.4-2l-.1-.1a2.1 2.1 0 0 1 3-3l.1.1a1.8 1.8 0 0 0 2 .4 1.8 1.8 0 0 0 1-1.6V3a2.1 2.1 0 0 1 4.2 0v.2a1.8 1.8 0 0 0 1 1.6 1.8 1.8 0 0 0 2-.4l.1-.1a2.1 2.1 0 0 1 3 3l-.1.1a1.8 1.8 0 0 0-.4 2 1.8 1.8 0 0 0 1.6 1h.2a2.1 2.1 0 0 1 0 4.2h-.2a1.8 1.8 0 0 0-1.6 1z"/></svg>',
  refresh: '<svg class="icon" viewBox="0 0 24 24"><path d="M20 12a8 8 0 0 1-14.9 4"/><path d="M4 12a8 8 0 0 1 14.9-4"/><path d="M18 3v5h-5"/><path d="M6 21v-5h5"/></svg>',
  plus: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 5v14"/><path d="M5 12h14"/></svg>',
  save: '<svg class="icon" viewBox="0 0 24 24"><path d="M5 3h12l2 2v16H5z"/><path d="M8 3v6h8V3"/><path d="M8 21v-7h8v7"/></svg>',
  lock: '<svg class="icon" viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
  edit: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 20h4l11-11a2.1 2.1 0 0 0-3-3L5 17z"/><path d="M13.5 6.5l3 3"/></svg>',
  trash: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 7h16"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M6 7l1 14h10l1-14"/><path d="M9 7V4h6v3"/></svg>'
};

const copy = {
  "zh-Hant": {
    tagline: "個人資產中控台",
    navOverview: "總覽",
    navLedger: "記帳",
    navAssets: "資產",
    navLiabilities: "負債",
    navSettings: "設定",
    defaultCurrency: "預設幣別",
    priceStatus: "價格",
    todayLabel: "今日財務概況",
    netWorth: "淨資產",
    monthlyIncome: "本月收入",
    monthlyExpense: "本月支出",
    afterTax: "稅後估算",
    debtRatio: "負債比",
    liabilityVsAsset: "負債 / 資產",
    assetMix: "資產負債",
    portfolio: "財務結構",
    syncPrices: "同步價格",
    assetsTotal: "總資產",
    liabilityTotal: "負債總額",
    balanceSheetTotal: "財務總量",
    jarMethod: "六個帳戶",
    jarPlan: "本月配置",
    cashflow: "現金流",
    recentActivity: "最近交易",
    addTransaction: "新增交易",
    newRecord: "新增紀錄",
    transaction: "交易",
    type: "類型",
    expense: "支出",
    income: "收入",
    transfer: "轉帳",
    debtPayment: "還款",
    amount: "金額",
    category: "分類",
    account: "帳戶",
    note: "備註",
    notePlaceholder: "午餐、交通、訂閱...",
    saveTransaction: "儲存交易",
    updateTransaction: "更新交易",
    cancelEdit: "取消編輯",
    edit: "編輯",
    toAccount: "轉入帳戶",
    needTwoAccountsForTransfer: "轉帳需要至少兩個帳戶。",
    monthlyReport: "月報",
    monthSnapshot: "本月摘要",
    netCashflow: "本月結餘",
    largestExpenseCategory: "最大支出",
    savingsRate: "結餘率",
    transactionCount: "交易筆數",
    quickAddAccount: "快速新增帳戶",
    saveAccount: "儲存帳戶",
    records: "紀錄",
    allTransactions: "全部交易",
    all: "全部",
    liquidFunds: "流動資金",
    investments: "投資",
    fixedAssets: "固定資產",
    receivables: "應收款",
    accountType: "帳戶類型",
    cash: "現金",
    eWallet: "電子錢包",
    bankAccount: "銀行帳戶",
    other: "其他",
    provider: "品牌/機構",
    name: "名稱",
    balance: "餘額",
    addLiquid: "新增流動資金",
    investmentType: "投資類型",
    stock: "股票",
    fund: "基金",
    crypto: "加密貨幣",
    metal: "貴金屬",
    symbol: "代號",
    quantity: "數量",
    price: "目前價格",
    purchasePrice: "購買價格",
    priceCurrency: "價格幣別",
    addInvestment: "新增投資",
    assetType: "資產類型",
    realEstate: "房產",
    vehicle: "汽車",
    purchaseValue: "購入價值",
    currentValue: "目前估值",
    addFixed: "新增固定資產",
    person: "對象",
    dueDate: "到期日",
    status: "狀態",
    open: "未收",
    partial: "部分收",
    overdue: "逾期",
    addReceivable: "新增應收款",
    portfolioList: "清單",
    newLiability: "新增負債",
    liability: "負債",
    liabilityType: "負債類型",
    creditCard: "信用卡",
    mortgage: "房貸",
    autoLoan: "車貸",
    consumerLoan: "消費貸款",
    educationLoan: "教育貸款",
    otherLoan: "其他貸款",
    interestRate: "利率",
    minimumPayment: "最低應繳",
    addLiability: "新增負債",
    debtPlan: "負債管理",
    liabilityList: "負債清單",
    preferences: "偏好設定",
    regionalSettings: "地區與語言",
    language: "語言",
    country: "國家/地區",
    currency: "幣別",
    monthlyIncomeInput: "月收入",
    debtPriorityMode: "還債優先模式",
    debtSacrificeSources: "還債來源",
    debtSacrificeHint: "啟用還債優先後，系統會先從勾選的帳戶挪出比例給還款帳戶；必要帳戶不會被犧牲。",
    saveSettings: "儲存設定",
    recommendedSplit: "建議配置",
    educationOnly: "配置僅供教育與預算規劃參考，不構成投資、稅務或貸款建議。",
    liquidTotal: "流動資金",
    investmentTotal: "投資總值",
    fixedTotal: "固定資產",
    receivableTotal: "應收款",
    updated: "已更新",
    locked: "已鎖定",
    saved: "已儲存",
    deleted: "已刪除",
    delete: "刪除",
    deleteAssetConfirm: "確定要刪除這筆資產嗎？",
    deleteLiabilityConfirm: "確定要刪除這筆負債嗎？",
    deleteTransactionConfirm: "確定要刪除這筆交易嗎？",
    noDebtPriorityHint: "沒有負債時不會啟用還債帳戶。",
    selectAccountFirst: "請先新增一個帳戶，才能記帳。",
    noAccountOption: "尚未建立帳戶",
    incomePowerHint: "比例會先把月收入換算成 USD，再依國家生活成本調整；不會只看原始數字。",
    marketDataNote: "原型中加密貨幣可嘗試公開行情同步；股票、ETF、基金、貴金屬需要正式行情資料商或 API key。",
    livePrice: "公開行情",
    needsMarketProvider: "需行情資料商/API key",
    priceSyncPartial: "部分價格已同步",
    priceSyncUnavailable: "目前沒有可用的公開行情可同步",
    priceSynced: "價格已同步",
    standardMode: "標準模式",
    debtMode: "還債優先",
    necessities: "必要帳戶",
    longTermSavings: "長期儲蓄帳戶",
    education: "教育成長帳戶",
    play: "玩樂帳戶",
    financialFreedom: "財務自由帳戶",
    giving: "人情回饋帳戶",
    debtPaydownAccount: "還款帳戶",
    cardDue: "繳款日",
    rate: "利率",
    manualPrice: "手動/模擬價格",
    pageOverview: "總覽",
    pageLedger: "記帳",
    pageAssets: "資產",
    pageLiabilities: "負債",
    pageSettings: "設定"
  },
  "zh-Hans": {
    tagline: "个人资产中控台",
    navOverview: "总览",
    navLedger: "记账",
    navAssets: "资产",
    navLiabilities: "负债",
    navSettings: "设置",
    defaultCurrency: "默认币别",
    priceStatus: "价格",
    todayLabel: "今日财务概况",
    netWorth: "净资产",
    monthlyIncome: "本月收入",
    monthlyExpense: "本月支出",
    afterTax: "税后估算",
    debtRatio: "负债比",
    liabilityVsAsset: "负债 / 资产",
    assetMix: "资产负债",
    portfolio: "财务结构",
    syncPrices: "同步价格",
    assetsTotal: "总资产",
    liabilityTotal: "负债总额",
    balanceSheetTotal: "财务总量",
    jarMethod: "六个账户",
    jarPlan: "本月配置",
    cashflow: "现金流",
    recentActivity: "最近交易",
    addTransaction: "新增交易",
    newRecord: "新增记录",
    transaction: "交易",
    type: "类型",
    expense: "支出",
    income: "收入",
    transfer: "转账",
    debtPayment: "还款",
    amount: "金额",
    category: "分类",
    account: "账户",
    note: "备注",
    notePlaceholder: "午餐、交通、订阅...",
    saveTransaction: "保存交易",
    updateTransaction: "更新交易",
    cancelEdit: "取消编辑",
    edit: "编辑",
    toAccount: "转入账户",
    needTwoAccountsForTransfer: "转账需要至少两个账户。",
    monthlyReport: "月报",
    monthSnapshot: "本月摘要",
    netCashflow: "本月结余",
    largestExpenseCategory: "最大支出",
    savingsRate: "结余率",
    transactionCount: "交易笔数",
    quickAddAccount: "快速新增账户",
    saveAccount: "保存账户",
    records: "记录",
    allTransactions: "全部交易",
    all: "全部",
    liquidFunds: "流动资金",
    investments: "投资",
    fixedAssets: "固定资产",
    receivables: "应收款",
    accountType: "账户类型",
    cash: "现金",
    eWallet: "电子钱包",
    bankAccount: "银行账户",
    other: "其他",
    provider: "品牌/机构",
    name: "名称",
    balance: "余额",
    addLiquid: "新增流动资金",
    investmentType: "投资类型",
    stock: "股票",
    fund: "基金",
    crypto: "加密货币",
    metal: "贵金属",
    symbol: "代码",
    quantity: "数量",
    price: "当前价格",
    purchasePrice: "购买价格",
    priceCurrency: "价格币别",
    addInvestment: "新增投资",
    assetType: "资产类型",
    realEstate: "房产",
    vehicle: "汽车",
    purchaseValue: "买入价值",
    currentValue: "当前估值",
    addFixed: "新增固定资产",
    person: "对象",
    dueDate: "到期日",
    status: "状态",
    open: "未收",
    partial: "部分收",
    overdue: "逾期",
    addReceivable: "新增应收款",
    portfolioList: "清单",
    newLiability: "新增负债",
    liability: "负债",
    liabilityType: "负债类型",
    creditCard: "信用卡",
    mortgage: "房贷",
    autoLoan: "车贷",
    consumerLoan: "消费贷款",
    educationLoan: "教育贷款",
    otherLoan: "其他贷款",
    interestRate: "利率",
    minimumPayment: "最低应还",
    addLiability: "新增负债",
    debtPlan: "负债管理",
    liabilityList: "负债清单",
    preferences: "偏好设置",
    regionalSettings: "地区与语言",
    language: "语言",
    country: "国家/地区",
    currency: "币别",
    monthlyIncomeInput: "月收入",
    debtPriorityMode: "还债优先模式",
    debtSacrificeSources: "还债来源",
    debtSacrificeHint: "启用还债优先后，系统会先从勾选的账户挪出比例给还款账户；必要账户不会被牺牲。",
    saveSettings: "保存设置",
    recommendedSplit: "建议配置",
    educationOnly: "配置仅供教育与预算规划参考，不构成投资、税务或贷款建议。",
    liquidTotal: "流动资金",
    investmentTotal: "投资总值",
    fixedTotal: "固定资产",
    receivableTotal: "应收款",
    updated: "已更新",
    locked: "已锁定",
    saved: "已保存",
    deleted: "已删除",
    delete: "删除",
    deleteAssetConfirm: "确定要删除这笔资产吗？",
    deleteLiabilityConfirm: "确定要删除这笔负债吗？",
    deleteTransactionConfirm: "确定要删除这笔交易吗？",
    noDebtPriorityHint: "没有负债时不会启用还债账户。",
    selectAccountFirst: "请先新增一个账户，才能记账。",
    noAccountOption: "尚未建立账户",
    incomePowerHint: "比例会先把月收入换算成 USD，再按国家生活成本调整；不会只看原始数字。",
    marketDataNote: "原型中加密货币可尝试公开行情同步；股票、ETF、基金、贵金属需要正式行情数据商或 API key。",
    livePrice: "公开行情",
    needsMarketProvider: "需行情数据商/API key",
    priceSyncPartial: "部分价格已同步",
    priceSyncUnavailable: "目前没有可用的公开行情可同步",
    priceSynced: "价格已同步",
    standardMode: "标准模式",
    debtMode: "还债优先",
    necessities: "必要账户",
    longTermSavings: "长期储蓄账户",
    education: "教育成长账户",
    play: "玩乐账户",
    financialFreedom: "财务自由账户",
    giving: "人情回馈账户",
    debtPaydownAccount: "还款账户",
    cardDue: "还款日",
    rate: "利率",
    manualPrice: "手动/模拟价格",
    pageOverview: "总览",
    pageLedger: "记账",
    pageAssets: "资产",
    pageLiabilities: "负债",
    pageSettings: "设置"
  },
  en: {
    tagline: "Personal wealth dashboard",
    navOverview: "Overview",
    navLedger: "Ledger",
    navAssets: "Assets",
    navLiabilities: "Debt",
    navSettings: "Settings",
    defaultCurrency: "Default currency",
    priceStatus: "Prices",
    todayLabel: "Today",
    netWorth: "Net worth",
    monthlyIncome: "Monthly income",
    monthlyExpense: "Monthly expense",
    afterTax: "After tax estimate",
    debtRatio: "Debt ratio",
    liabilityVsAsset: "Debt / assets",
    assetMix: "Balance sheet",
    portfolio: "Financial structure",
    syncPrices: "Sync prices",
    assetsTotal: "Total assets",
    liabilityTotal: "Total debt",
    balanceSheetTotal: "Total position",
    jarMethod: "Six accounts",
    jarPlan: "Monthly split",
    cashflow: "Cash flow",
    recentActivity: "Recent activity",
    addTransaction: "Add transaction",
    newRecord: "New record",
    transaction: "Transaction",
    type: "Type",
    expense: "Expense",
    income: "Income",
    transfer: "Transfer",
    debtPayment: "Debt payment",
    amount: "Amount",
    category: "Category",
    account: "Account",
    note: "Note",
    notePlaceholder: "Lunch, transport, subscription...",
    saveTransaction: "Save transaction",
    updateTransaction: "Update transaction",
    cancelEdit: "Cancel edit",
    edit: "Edit",
    toAccount: "To account",
    needTwoAccountsForTransfer: "Transfers need at least two accounts.",
    monthlyReport: "Monthly report",
    monthSnapshot: "This month",
    netCashflow: "Net cashflow",
    largestExpenseCategory: "Top expense",
    savingsRate: "Savings rate",
    transactionCount: "Transactions",
    quickAddAccount: "Quick add account",
    saveAccount: "Save account",
    records: "Records",
    allTransactions: "All transactions",
    all: "All",
    liquidFunds: "Liquid funds",
    investments: "Investments",
    fixedAssets: "Fixed assets",
    receivables: "Receivables",
    accountType: "Account type",
    cash: "Cash",
    eWallet: "E-wallet",
    bankAccount: "Bank account",
    other: "Other",
    provider: "Brand / provider",
    name: "Name",
    balance: "Balance",
    addLiquid: "Add liquid fund",
    investmentType: "Investment type",
    stock: "Stock",
    fund: "Fund",
    crypto: "Cryptocurrency",
    metal: "Precious metal",
    symbol: "Symbol",
    quantity: "Quantity",
    price: "Current price",
    purchasePrice: "Purchase price",
    priceCurrency: "Price currency",
    addInvestment: "Add investment",
    assetType: "Asset type",
    realEstate: "Real estate",
    vehicle: "Vehicle",
    purchaseValue: "Purchase value",
    currentValue: "Current value",
    addFixed: "Add fixed asset",
    person: "Person",
    dueDate: "Due date",
    status: "Status",
    open: "Open",
    partial: "Partial",
    overdue: "Overdue",
    addReceivable: "Add receivable",
    portfolioList: "List",
    newLiability: "New debt",
    liability: "Debt",
    liabilityType: "Debt type",
    creditCard: "Credit card",
    mortgage: "Mortgage",
    autoLoan: "Auto loan",
    consumerLoan: "Consumer loan",
    educationLoan: "Education loan",
    otherLoan: "Other loan",
    interestRate: "Interest rate",
    minimumPayment: "Minimum payment",
    addLiability: "Add debt",
    debtPlan: "Debt plan",
    liabilityList: "Debt list",
    preferences: "Preferences",
    regionalSettings: "Region and language",
    language: "Language",
    country: "Country / region",
    currency: "Currency",
    monthlyIncomeInput: "Monthly income",
    debtPriorityMode: "Debt priority mode",
    debtSacrificeSources: "Debt funding sources",
    debtSacrificeHint: "When debt priority is on, the app reallocates from selected accounts into debt payoff. Necessities are protected.",
    saveSettings: "Save settings",
    recommendedSplit: "Recommended split",
    educationOnly: "Allocations are for education and budgeting only, not investment, tax, or lending advice.",
    liquidTotal: "Liquid funds",
    investmentTotal: "Investments",
    fixedTotal: "Fixed assets",
    receivableTotal: "Receivables",
    updated: "Updated",
    locked: "Locked",
    saved: "Saved",
    deleted: "Deleted",
    delete: "Delete",
    deleteAssetConfirm: "Delete this asset?",
    deleteLiabilityConfirm: "Delete this debt?",
    deleteTransactionConfirm: "Delete this transaction?",
    noDebtPriorityHint: "Debt account is disabled when there is no debt.",
    selectAccountFirst: "Add an account before recording transactions.",
    noAccountOption: "No account yet",
    incomePowerHint: "The split converts monthly income to USD, then adjusts for local cost of living; it does not compare raw numbers only.",
    marketDataNote: "In this prototype, crypto can try public market sync. Stocks, ETFs, funds, and metals need a licensed data provider or API key.",
    livePrice: "Public market price",
    needsMarketProvider: "Needs data provider/API key",
    priceSyncPartial: "Some prices synced",
    priceSyncUnavailable: "No public market prices available to sync",
    priceSynced: "Prices synced",
    standardMode: "Standard",
    debtMode: "Debt priority",
    necessities: "Necessities account",
    longTermSavings: "Long-term savings account",
    education: "Education account",
    play: "Play account",
    financialFreedom: "Freedom account",
    giving: "Care account",
    debtPaydownAccount: "Debt payoff account",
    cardDue: "Due",
    rate: "Rate",
    manualPrice: "Manual/simulated price",
    pageOverview: "Overview",
    pageLedger: "Ledger",
    pageAssets: "Assets",
    pageLiabilities: "Debt",
    pageSettings: "Settings"
  },
  ja: {
    tagline: "個人資産ダッシュボード",
    navOverview: "概要",
    navLedger: "家計簿",
    navAssets: "資産",
    navLiabilities: "負債",
    navSettings: "設定",
    defaultCurrency: "基準通貨",
    priceStatus: "価格",
    todayLabel: "今日の財務状況",
    netWorth: "純資産",
    monthlyIncome: "今月の収入",
    monthlyExpense: "今月の支出",
    afterTax: "税引後の目安",
    debtRatio: "負債比率",
    liabilityVsAsset: "負債 / 資産",
    assetMix: "資産・負債",
    portfolio: "財務構造",
    syncPrices: "価格を同期",
    assetsTotal: "総資産",
    liabilityTotal: "負債総額",
    balanceSheetTotal: "財務総量",
    jarMethod: "6つの口座",
    jarPlan: "今月の配分",
    cashflow: "キャッシュフロー",
    recentActivity: "最近の取引",
    addTransaction: "取引を追加",
    newRecord: "新規記録",
    transaction: "取引",
    type: "種類",
    expense: "支出",
    income: "収入",
    transfer: "振替",
    debtPayment: "返済",
    amount: "金額",
    category: "カテゴリ",
    account: "口座",
    note: "メモ",
    notePlaceholder: "昼食、交通、サブスク...",
    saveTransaction: "取引を保存",
    updateTransaction: "取引を更新",
    cancelEdit: "編集をキャンセル",
    edit: "編集",
    toAccount: "入金先口座",
    needTwoAccountsForTransfer: "振替には少なくとも2つの口座が必要です。",
    monthlyReport: "月次レポート",
    monthSnapshot: "今月の概要",
    netCashflow: "今月の収支",
    largestExpenseCategory: "最大支出",
    savingsRate: "貯蓄率",
    transactionCount: "取引数",
    quickAddAccount: "口座をすばやく追加",
    saveAccount: "口座を保存",
    records: "記録",
    allTransactions: "すべての取引",
    all: "すべて",
    liquidFunds: "流動資金",
    investments: "投資",
    fixedAssets: "固定資産",
    receivables: "未収金",
    accountType: "口座タイプ",
    cash: "現金",
    eWallet: "電子マネー",
    bankAccount: "銀行口座",
    other: "その他",
    provider: "ブランド/機関",
    name: "名前",
    balance: "残高",
    addLiquid: "流動資金を追加",
    investmentType: "投資タイプ",
    stock: "株式",
    fund: "ファンド",
    crypto: "暗号資産",
    metal: "貴金属",
    symbol: "銘柄コード",
    quantity: "数量",
    price: "現在価格",
    purchasePrice: "購入価格",
    priceCurrency: "価格通貨",
    addInvestment: "投資を追加",
    assetType: "資産タイプ",
    realEstate: "不動産",
    vehicle: "自動車",
    purchaseValue: "購入価値",
    currentValue: "現在評価額",
    addFixed: "固定資産を追加",
    person: "相手",
    dueDate: "期日",
    status: "状態",
    open: "未回収",
    partial: "一部回収",
    overdue: "期限超過",
    addReceivable: "未収金を追加",
    portfolioList: "一覧",
    newLiability: "負債を追加",
    liability: "負債",
    liabilityType: "負債タイプ",
    creditCard: "クレジットカード",
    mortgage: "住宅ローン",
    autoLoan: "自動車ローン",
    consumerLoan: "消費者ローン",
    educationLoan: "教育ローン",
    otherLoan: "その他ローン",
    interestRate: "金利",
    minimumPayment: "最低支払額",
    addLiability: "負債を追加",
    debtPlan: "負債管理",
    liabilityList: "負債一覧",
    preferences: "環境設定",
    regionalSettings: "地域と言語",
    language: "言語",
    country: "国/地域",
    currency: "通貨",
    monthlyIncomeInput: "月収",
    debtPriorityMode: "返済優先モード",
    debtSacrificeSources: "返済に回す口座",
    debtSacrificeHint: "返済優先を有効にすると、選択した口座から返済口座へ配分を移します。必要口座は守られます。",
    saveSettings: "設定を保存",
    recommendedSplit: "おすすめ配分",
    educationOnly: "配分は教育と予算管理の参考用であり、投資・税務・融資の助言ではありません。",
    liquidTotal: "流動資金",
    investmentTotal: "投資総額",
    fixedTotal: "固定資産",
    receivableTotal: "未収金",
    updated: "更新済み",
    locked: "ロック済み",
    saved: "保存しました",
    deleted: "削除しました",
    delete: "削除",
    deleteAssetConfirm: "この資産を削除しますか？",
    deleteLiabilityConfirm: "この負債を削除しますか？",
    deleteTransactionConfirm: "この取引を削除しますか？",
    noDebtPriorityHint: "負債がない場合、返済口座は有効になりません。",
    selectAccountFirst: "記録する前に口座を追加してください。",
    noAccountOption: "口座がありません",
    incomePowerHint: "配分は月収を USD に換算し、国ごとの生活コストで調整します。単純な数字だけでは判断しません。",
    marketDataNote: "このプロトタイプでは暗号資産のみ公開価格の同期を試せます。株式、ETF、ファンド、貴金属には正式なデータプロバイダーまたは API key が必要です。",
    livePrice: "公開価格",
    needsMarketProvider: "データプロバイダー/API key が必要",
    priceSyncPartial: "一部の価格を同期しました",
    priceSyncUnavailable: "同期できる公開価格がありません",
    priceSynced: "価格を同期しました",
    standardMode: "標準モード",
    debtMode: "返済優先",
    necessities: "必要口座",
    longTermSavings: "長期貯蓄口座",
    education: "自己投資口座",
    play: "楽しみ口座",
    financialFreedom: "経済的自由口座",
    giving: "人付き合い口座",
    debtPaydownAccount: "返済口座",
    cardDue: "支払日",
    rate: "金利",
    manualPrice: "手動/模擬価格",
    pageOverview: "概要",
    pageLedger: "家計簿",
    pageAssets: "資産",
    pageLiabilities: "負債",
    pageSettings: "設定"
  }
};

Object.assign(copy, {
  es: {
    ...copy.en,
    tagline: "Panel de patrimonio personal",
    navOverview: "Resumen",
    navLedger: "Registro",
    navAssets: "Activos",
    navLiabilities: "Deudas",
    navSettings: "Ajustes",
    todayLabel: "Situación financiera de hoy",
    netWorth: "Patrimonio neto",
    monthlyIncome: "Ingresos del mes",
    monthlyExpense: "Gastos del mes",
    debtRatio: "Ratio de deuda",
    assetMix: "Asignación",
    portfolio: "Portafolio",
    syncPrices: "Sincronizar precios",
    jarMethod: "Seis cuentas",
    jarPlan: "Distribución mensual",
    transaction: "Transacción",
    addTransaction: "Agregar transacción",
    liquidFunds: "Fondos líquidos",
    investments: "Inversiones",
    fixedAssets: "Activos fijos",
    receivables: "Cuentas por cobrar",
    preferences: "Preferencias",
    regionalSettings: "Región e idioma",
    language: "Idioma",
    country: "País/región",
    currency: "Moneda",
    monthlyIncomeInput: "Ingreso mensual",
    recommendedSplit: "Distribución sugerida",
    necessities: "Cuenta de necesidades",
    longTermSavings: "Cuenta de ahorro a largo plazo",
    education: "Cuenta de educación",
    play: "Cuenta de disfrute",
    financialFreedom: "Cuenta de libertad financiera",
    giving: "Cuenta de relaciones y apoyo",
    debtPaydownAccount: "Cuenta de pago de deudas",
    marketDataNote: "En este prototipo, las criptomonedas pueden intentar sincronizarse con precios públicos. Acciones, ETF, fondos y metales necesitan un proveedor de datos o API key.",
    livePrice: "Precio público",
    needsMarketProvider: "Requiere proveedor/API key"
  },
  fr: {
    ...copy.en,
    tagline: "Tableau de patrimoine personnel",
    navOverview: "Aperçu",
    navLedger: "Journal",
    navAssets: "Actifs",
    navLiabilities: "Dettes",
    navSettings: "Réglages",
    netWorth: "Patrimoine net",
    monthlyIncome: "Revenus du mois",
    monthlyExpense: "Dépenses du mois",
    portfolio: "Portefeuille",
    syncPrices: "Synchroniser les prix",
    jarMethod: "Six comptes",
    jarPlan: "Répartition mensuelle",
    language: "Langue",
    country: "Pays/région",
    currency: "Devise",
    monthlyIncomeInput: "Revenu mensuel",
    recommendedSplit: "Répartition conseillée",
    necessities: "Compte des besoins",
    longTermSavings: "Compte d'épargne long terme",
    education: "Compte d'apprentissage",
    play: "Compte plaisir",
    financialFreedom: "Compte liberté financière",
    giving: "Compte relations et soutien",
    debtPaydownAccount: "Compte remboursement",
    marketDataNote: "Dans ce prototype, seules les cryptomonnaies peuvent tenter une synchronisation publique. Actions, ETF, fonds et métaux nécessitent un fournisseur de données ou une clé API.",
    livePrice: "Prix public",
    needsMarketProvider: "Fournisseur/API key requis"
  },
  de: {
    ...copy.en,
    tagline: "Persönliches Vermögens-Dashboard",
    navOverview: "Übersicht",
    navLedger: "Kassenbuch",
    navAssets: "Vermögen",
    navLiabilities: "Schulden",
    navSettings: "Einstellungen",
    netWorth: "Nettovermögen",
    monthlyIncome: "Monatseinkommen",
    monthlyExpense: "Monatsausgaben",
    portfolio: "Portfolio",
    syncPrices: "Preise synchronisieren",
    jarMethod: "Sechs Konten",
    jarPlan: "Monatliche Aufteilung",
    language: "Sprache",
    country: "Land/Region",
    currency: "Währung",
    monthlyIncomeInput: "Monatseinkommen",
    recommendedSplit: "Empfohlene Aufteilung",
    necessities: "Notwendigkeiten-Konto",
    longTermSavings: "Langfristiges Sparkonto",
    education: "Bildungskonto",
    play: "Freizeitkonto",
    financialFreedom: "Finanzfreiheitskonto",
    giving: "Beziehungs- und Unterstützungskonto",
    debtPaydownAccount: "Schuldentilgungs-Konto",
    marketDataNote: "In diesem Prototyp können nur Kryptopreise öffentlich synchronisiert werden. Aktien, ETFs, Fonds und Metalle benötigen einen Datenanbieter oder API key.",
    livePrice: "Öffentlicher Marktpreis",
    needsMarketProvider: "Datenanbieter/API key nötig"
  },
  "pt-BR": {
    ...copy.en,
    tagline: "Painel de patrimônio pessoal",
    navOverview: "Visão geral",
    navLedger: "Registros",
    navAssets: "Ativos",
    navLiabilities: "Dívidas",
    navSettings: "Configurações",
    netWorth: "Patrimônio líquido",
    monthlyIncome: "Renda mensal",
    monthlyExpense: "Despesas mensais",
    portfolio: "Carteira",
    syncPrices: "Sincronizar preços",
    jarMethod: "Seis contas",
    jarPlan: "Divisão mensal",
    language: "Idioma",
    country: "País/região",
    currency: "Moeda",
    monthlyIncomeInput: "Renda mensal",
    recommendedSplit: "Divisão sugerida",
    necessities: "Conta de necessidades",
    longTermSavings: "Conta de poupança de longo prazo",
    education: "Conta de educação",
    play: "Conta de lazer",
    financialFreedom: "Conta de liberdade financeira",
    giving: "Conta de cuidado e relações",
    debtPaydownAccount: "Conta de quitar dívidas",
    marketDataNote: "Neste protótipo, criptomoedas podem tentar sincronizar preços públicos. Ações, ETFs, fundos e metais precisam de provedor de dados ou API key.",
    livePrice: "Preço público",
    needsMarketProvider: "Requer provedor/API key"
  },
  ko: {
    ...copy.en,
    tagline: "개인 자산 대시보드",
    navOverview: "개요",
    navLedger: "가계부",
    navAssets: "자산",
    navLiabilities: "부채",
    navSettings: "설정",
    netWorth: "순자산",
    monthlyIncome: "월수입",
    monthlyExpense: "월지출",
    portfolio: "포트폴리오",
    syncPrices: "가격 동기화",
    jarMethod: "여섯 계정",
    jarPlan: "월간 배분",
    language: "언어",
    country: "국가/지역",
    currency: "통화",
    monthlyIncomeInput: "월수입",
    recommendedSplit: "추천 배분",
    necessities: "필수 지출 계정",
    longTermSavings: "장기 저축 계정",
    education: "성장/교육 계정",
    play: "즐거움 계정",
    financialFreedom: "경제적 자유 계정",
    giving: "관계/돌봄 계정",
    debtPaydownAccount: "부채 상환 계정",
    marketDataNote: "이 프로토타입에서는 암호화폐만 공개 시세 동기화를 시도합니다. 주식, ETF, 펀드, 귀금속은 데이터 제공자 또는 API key가 필요합니다.",
    livePrice: "공개 시세",
    needsMarketProvider: "데이터 제공자/API key 필요"
  },
  id: {
    ...copy.en,
    tagline: "Dasbor kekayaan pribadi",
    navOverview: "Ringkasan",
    navLedger: "Catatan",
    navAssets: "Aset",
    navLiabilities: "Utang",
    navSettings: "Pengaturan",
    netWorth: "Kekayaan bersih",
    monthlyIncome: "Pendapatan bulanan",
    monthlyExpense: "Pengeluaran bulanan",
    portfolio: "Portofolio",
    syncPrices: "Sinkron harga",
    jarMethod: "Enam rekening",
    jarPlan: "Alokasi bulanan",
    language: "Bahasa",
    country: "Negara/wilayah",
    currency: "Mata uang",
    monthlyIncomeInput: "Pendapatan bulanan",
    recommendedSplit: "Alokasi disarankan",
    necessities: "Rekening kebutuhan",
    longTermSavings: "Rekening tabungan jangka panjang",
    education: "Rekening pendidikan",
    play: "Rekening hiburan",
    financialFreedom: "Rekening kebebasan finansial",
    giving: "Rekening relasi dan bantuan",
    debtPaydownAccount: "Rekening pelunasan utang",
    marketDataNote: "Dalam prototipe ini, kripto dapat mencoba sinkronisasi harga publik. Saham, ETF, reksa dana, dan logam membutuhkan penyedia data atau API key.",
    livePrice: "Harga publik",
    needsMarketProvider: "Butuh penyedia/API key"
  },
  th: {
    ...copy.en,
    tagline: "แดชบอร์ดทรัพย์สินส่วนตัว",
    navOverview: "ภาพรวม",
    navLedger: "บัญชีรายรับรายจ่าย",
    navAssets: "สินทรัพย์",
    navLiabilities: "หนี้สิน",
    navSettings: "ตั้งค่า",
    netWorth: "มูลค่าสุทธิ",
    monthlyIncome: "รายได้ต่อเดือน",
    monthlyExpense: "รายจ่ายต่อเดือน",
    portfolio: "พอร์ต",
    syncPrices: "ซิงก์ราคา",
    jarMethod: "หกบัญชี",
    jarPlan: "การแบ่งรายเดือน",
    language: "ภาษา",
    country: "ประเทศ/ภูมิภาค",
    currency: "สกุลเงิน",
    monthlyIncomeInput: "รายได้ต่อเดือน",
    recommendedSplit: "สัดส่วนแนะนำ",
    necessities: "บัญชีจำเป็น",
    longTermSavings: "บัญชีออมระยะยาว",
    education: "บัญชีพัฒนาตัวเอง",
    play: "บัญชีความสุข",
    financialFreedom: "บัญชีอิสรภาพทางการเงิน",
    giving: "บัญชีดูแลความสัมพันธ์",
    debtPaydownAccount: "บัญชีชำระหนี้",
    marketDataNote: "ในต้นแบบนี้ คริปโตสามารถลองซิงก์ราคาสาธารณะได้ หุ้น ETF กองทุน และโลหะต้องใช้ผู้ให้บริการข้อมูลหรือ API key.",
    livePrice: "ราคาสาธารณะ",
    needsMarketProvider: "ต้องใช้ผู้ให้บริการ/API key"
  },
  vi: {
    ...copy.en,
    tagline: "Bảng điều khiển tài sản cá nhân",
    navOverview: "Tổng quan",
    navLedger: "Sổ thu chi",
    navAssets: "Tài sản",
    navLiabilities: "Nợ",
    navSettings: "Cài đặt",
    netWorth: "Tài sản ròng",
    monthlyIncome: "Thu nhập tháng",
    monthlyExpense: "Chi tiêu tháng",
    portfolio: "Danh mục",
    syncPrices: "Đồng bộ giá",
    jarMethod: "Sáu tài khoản",
    jarPlan: "Phân bổ tháng",
    language: "Ngôn ngữ",
    country: "Quốc gia/khu vực",
    currency: "Tiền tệ",
    monthlyIncomeInput: "Thu nhập tháng",
    recommendedSplit: "Phân bổ gợi ý",
    necessities: "Tài khoản thiết yếu",
    longTermSavings: "Tài khoản tiết kiệm dài hạn",
    education: "Tài khoản học tập",
    play: "Tài khoản tận hưởng",
    financialFreedom: "Tài khoản tự do tài chính",
    giving: "Tài khoản quan hệ và hỗ trợ",
    debtPaydownAccount: "Tài khoản trả nợ",
    marketDataNote: "Trong bản mẫu này, crypto có thể thử đồng bộ giá công khai. Cổ phiếu, ETF, quỹ và kim loại cần nhà cung cấp dữ liệu hoặc API key.",
    livePrice: "Giá công khai",
    needsMarketProvider: "Cần nhà cung cấp/API key"
  },
  hi: {
    ...copy.en,
    tagline: "व्यक्तिगत संपत्ति डैशबोर्ड",
    navOverview: "सारांश",
    navLedger: "लेजर",
    navAssets: "संपत्ति",
    navLiabilities: "कर्ज",
    navSettings: "सेटिंग",
    netWorth: "नेट वर्थ",
    monthlyIncome: "मासिक आय",
    monthlyExpense: "मासिक खर्च",
    portfolio: "पोर्टफोलियो",
    syncPrices: "कीमतें सिंक करें",
    jarMethod: "छह खाते",
    jarPlan: "मासिक विभाजन",
    language: "भाषा",
    country: "देश/क्षेत्र",
    currency: "मुद्रा",
    monthlyIncomeInput: "मासिक आय",
    recommendedSplit: "सुझाया विभाजन",
    necessities: "ज़रूरी खर्च खाता",
    longTermSavings: "दीर्घकालीन बचत खाता",
    education: "शिक्षा खाता",
    play: "मनोरंजन खाता",
    financialFreedom: "वित्तीय स्वतंत्रता खाता",
    giving: "संबंध और सहयोग खाता",
    debtPaydownAccount: "कर्ज भुगतान खाता",
    marketDataNote: "इस प्रोटोटाइप में केवल क्रिप्टो सार्वजनिक कीमत सिंक करने की कोशिश कर सकता है। स्टॉक, ETF, फंड और धातुओं के लिए डेटा प्रदाता या API key चाहिए।",
    livePrice: "सार्वजनिक कीमत",
    needsMarketProvider: "डेटा प्रदाता/API key चाहिए"
  },
  ar: {
    ...copy.en,
    tagline: "لوحة الثروة الشخصية",
    navOverview: "نظرة عامة",
    navLedger: "السجل",
    navAssets: "الأصول",
    navLiabilities: "الديون",
    navSettings: "الإعدادات",
    netWorth: "صافي الثروة",
    monthlyIncome: "الدخل الشهري",
    monthlyExpense: "المصاريف الشهرية",
    portfolio: "المحفظة",
    syncPrices: "مزامنة الأسعار",
    jarMethod: "ستة حسابات",
    jarPlan: "التوزيع الشهري",
    language: "اللغة",
    country: "الدولة/المنطقة",
    currency: "العملة",
    monthlyIncomeInput: "الدخل الشهري",
    recommendedSplit: "التوزيع المقترح",
    necessities: "حساب الضروريات",
    longTermSavings: "حساب الادخار الطويل",
    education: "حساب التعليم",
    play: "حساب المتعة",
    financialFreedom: "حساب الحرية المالية",
    giving: "حساب العلاقات والدعم",
    debtPaydownAccount: "حساب سداد الديون",
    marketDataNote: "في هذا النموذج، يمكن للعملات الرقمية محاولة مزامنة الأسعار العامة. الأسهم وETF والصناديق والمعادن تحتاج مزود بيانات أو API key.",
    livePrice: "سعر عام",
    needsMarketProvider: "يتطلب مزود بيانات/API key"
  }
});

const onboardingMessages = {
  "zh-Hant": {
    eyebrow: "首次設定",
    title: "歡迎使用 Jarfolio",
    intro: "先選擇你想使用的語言。",
    regionTitle: "選擇你的地區",
    regionIntro: "我們會依照地區設定預設幣別與顯示方式。",
    next: "下一步",
    back: "返回",
    continue: "開始使用"
  },
  "zh-Hans": {
    eyebrow: "首次设置",
    title: "欢迎使用 Jarfolio",
    intro: "请先选择你想使用的语言。",
    regionTitle: "选择你的地区",
    regionIntro: "我们会根据地区设置默认币种与显示方式。",
    next: "下一步",
    back: "返回",
    continue: "开始使用"
  },
  en: {
    eyebrow: "FIRST SETUP",
    title: "Welcome to Jarfolio",
    intro: "Choose the language you would like to use.",
    regionTitle: "Choose your region",
    regionIntro: "We will use it to set your default currency and display format.",
    next: "Next",
    back: "Back",
    continue: "Get started"
  },
  ja: {
    eyebrow: "初期設定",
    title: "Jarfolioへようこそ",
    intro: "使用する言語を選択してください。",
    regionTitle: "地域を選択",
    regionIntro: "地域に合わせて通貨と表示形式を設定します。",
    next: "次へ",
    back: "戻る",
    continue: "はじめる"
  },
  es: {
    eyebrow: "CONFIGURACIÓN INICIAL",
    title: "Te damos la bienvenida a Jarfolio",
    intro: "Elige el idioma que quieres utilizar.",
    regionTitle: "Elige tu región",
    regionIntro: "Usaremos la región para configurar la moneda y el formato.",
    next: "Siguiente",
    back: "Atrás",
    continue: "Comenzar"
  },
  fr: {
    eyebrow: "PREMIÈRE CONFIGURATION",
    title: "Bienvenue dans Jarfolio",
    intro: "Choisissez la langue que vous souhaitez utiliser.",
    regionTitle: "Choisissez votre région",
    regionIntro: "Nous définirons la devise et le format selon votre région.",
    next: "Suivant",
    back: "Retour",
    continue: "Commencer"
  },
  de: {
    eyebrow: "ERSTE EINRICHTUNG",
    title: "Willkommen bei Jarfolio",
    intro: "Wähle die Sprache, die du verwenden möchtest.",
    regionTitle: "Wähle deine Region",
    regionIntro: "Damit legen wir Währung und Anzeigeformat fest.",
    next: "Weiter",
    back: "Zurück",
    continue: "Loslegen"
  },
  "pt-BR": {
    eyebrow: "CONFIGURAÇÃO INICIAL",
    title: "Boas-vindas ao Jarfolio",
    intro: "Escolha o idioma que você quer usar.",
    regionTitle: "Escolha sua região",
    regionIntro: "Usaremos a região para definir a moeda e o formato.",
    next: "Próximo",
    back: "Voltar",
    continue: "Começar"
  },
  ko: {
    eyebrow: "첫 설정",
    title: "Jarfolio에 오신 것을 환영합니다",
    intro: "사용할 언어를 선택하세요.",
    regionTitle: "지역 선택",
    regionIntro: "지역에 맞춰 기본 통화와 표시 형식을 설정합니다.",
    next: "다음",
    back: "뒤로",
    continue: "시작하기"
  },
  id: {
    eyebrow: "PENGATURAN AWAL",
    title: "Selamat datang di Jarfolio",
    intro: "Pilih bahasa yang ingin digunakan.",
    regionTitle: "Pilih wilayah",
    regionIntro: "Wilayah digunakan untuk mengatur mata uang dan format tampilan.",
    next: "Berikutnya",
    back: "Kembali",
    continue: "Mulai"
  },
  th: {
    eyebrow: "ตั้งค่าครั้งแรก",
    title: "ยินดีต้อนรับสู่ Jarfolio",
    intro: "เลือกภาษาที่คุณต้องการใช้",
    regionTitle: "เลือกภูมิภาคของคุณ",
    regionIntro: "เราจะใช้ภูมิภาคเพื่อตั้งค่าสกุลเงินและรูปแบบการแสดงผล",
    next: "ถัดไป",
    back: "ย้อนกลับ",
    continue: "เริ่มใช้งาน"
  },
  vi: {
    eyebrow: "THIẾT LẬP BAN ĐẦU",
    title: "Chào mừng đến với Jarfolio",
    intro: "Chọn ngôn ngữ bạn muốn sử dụng.",
    regionTitle: "Chọn khu vực của bạn",
    regionIntro: "Khu vực sẽ được dùng để đặt tiền tệ và định dạng hiển thị.",
    next: "Tiếp theo",
    back: "Quay lại",
    continue: "Bắt đầu"
  },
  hi: {
    eyebrow: "पहली बार सेटअप",
    title: "Jarfolio में आपका स्वागत है",
    intro: "वह भाषा चुनें जिसका आप उपयोग करना चाहते हैं।",
    regionTitle: "अपना क्षेत्र चुनें",
    regionIntro: "क्षेत्र के आधार पर मुद्रा और प्रदर्शन प्रारूप सेट होगा।",
    next: "अगला",
    back: "वापस",
    continue: "शुरू करें"
  },
  ar: {
    eyebrow: "الإعداد الأول",
    title: "مرحبًا بك في Jarfolio",
    intro: "اختر اللغة التي تريد استخدامها.",
    regionTitle: "اختر منطقتك",
    regionIntro: "سنستخدم المنطقة لضبط العملة الافتراضية وتنسيق العرض.",
    next: "التالي",
    back: "رجوع",
    continue: "ابدأ"
  }
};

const countryLabelsByLanguage = {
  "zh-Hant": { TW: "台灣", HK: "香港", CN: "中國大陸" },
  "zh-Hans": { TW: "中国台湾", HK: "中国香港", CN: "中国大陆" }
};
const defaultCountryLabels = { TW: "台灣", HK: "香港", CN: "中国大陆" };

function updateCountryOptionLabels(language) {
  const labels = countryLabelsByLanguage[language] || defaultCountryLabels;
  ["countrySelect", "onboardingCountry"].forEach((selectId) => {
    const select = document.getElementById(selectId);
    if (!select) return;
    Object.entries(labels).forEach(([value, text]) => {
      const option = select.querySelector(`option[value="${value}"]`);
      if (option) option.textContent = text;
    });
  });
}

const categoryLabels = {
  food: { "zh-Hant": "飲食", "zh-Hans": "饮食", en: "Food", ja: "食費" },
  transport: { "zh-Hant": "交通", "zh-Hans": "交通", en: "Transport", ja: "交通" },
  housing: { "zh-Hant": "住房", "zh-Hans": "住房", en: "Housing", ja: "住居" },
  subscription: { "zh-Hant": "訂閱", "zh-Hans": "订阅", en: "Subscriptions", ja: "サブスク" },
  investment: { "zh-Hant": "投資", "zh-Hans": "投资", en: "Investment", ja: "投資" },
  salary: { "zh-Hant": "薪資", "zh-Hans": "薪资", en: "Salary", ja: "給与" },
  loan: { "zh-Hant": "貸款", "zh-Hans": "贷款", en: "Loan", ja: "ローン" },
  other: { "zh-Hant": "其他", "zh-Hans": "其他", en: "Other", ja: "その他" }
};

const accountDescriptions = {
  necessities: {
    "zh-Hant": "支付每月一定會發生的基本生活費，例如房租/房貸、餐飲、交通、水電、保險與日用品。",
    "zh-Hans": "支付每月一定会发生的基本生活费，例如房租/房贷、餐饮、交通、水电、保险与日用品。",
    en: "For essential monthly living costs such as rent or mortgage, food, transport, utilities, insurance, and everyday supplies.",
    ja: "家賃や住宅ローン、食費、交通費、光熱費、保険、日用品など、毎月必ず発生する生活費に使う口座です。"
  },
  longTermSavings: {
    "zh-Hant": "第一階段先存 3-6 個月必要支出的緊急備用金；完成後再用來準備買房頭期款、退休前儲蓄或其他大型目標，通常不隨便動用。",
    "zh-Hans": "第一阶段先存 3-6 个月必要支出的紧急备用金；完成后再用来准备买房首付、退休前储蓄或其他大型目标，通常不随便动用。",
    en: "First build an emergency fund covering 3-6 months of essential expenses, then use this account for goals such as a home down payment, pre-retirement savings, or other major goals.",
    ja: "まず生活必需費の 3-6 か月分の緊急資金を作り、その後に住宅購入の頭金、老後資金、その他の大きな目標に使う口座です。"
  },
  education: {
    "zh-Hant": "投資自己，例如課程、書籍、證照、語言學習、工具軟體與職涯成長。",
    "zh-Hans": "投资自己，例如课程、书籍、证照、语言学习、工具软件与职业成长。",
    en: "For investing in yourself: courses, books, certifications, language learning, tools, and career growth.",
    ja: "講座、書籍、資格、語学学習、仕事道具など、自分の成長に使う口座です。"
  },
  play: {
    "zh-Hant": "讓生活有餘裕的享受預算，例如旅行、餐廳、娛樂、興趣和犒賞自己。",
    "zh-Hans": "让生活有余裕的享受预算，例如旅行、餐厅、娱乐、兴趣和奖励自己。",
    en: "For enjoyment and balance: travel, dining out, entertainment, hobbies, and small rewards.",
    ja: "旅行、外食、娯楽、趣味、自分へのご褒美など、生活を楽しむための口座です。"
  },
  financialFreedom: {
    "zh-Hant": "用來建立會增值或產生現金流的資產，例如股票、ETF、基金、債券或其他長期投資。",
    "zh-Hans": "用来建立会增值或产生现金流的资产，例如股票、ETF、基金、债券或其他长期投资。",
    en: "For assets that may grow or generate cash flow, such as stocks, ETFs, funds, bonds, or other long-term investments.",
    ja: "株式、ETF、投資信託、債券など、将来の資産形成やキャッシュフローにつながる投資用口座です。"
  },
  giving: {
    "zh-Hant": "亞洲語境下的人情與回饋預算，例如紅白包、家人支持、送禮、請客、公益與捐款。",
    "zh-Hans": "亚洲语境下的人情与回馈预算，例如红包白包、家人支持、送礼、请客、公益与捐款。",
    en: "For care and social giving, such as family support, gifts, hosting meals, donations, and community goodwill.",
    ja: "ご祝儀・香典、家族への支援、贈り物、食事をごちそうすること、寄付など、人付き合いや感謝に使う口座です。"
  },
  debtPaydown: {
    "zh-Hant": "只有有負債且開啟還債優先時才出現，比例會從你勾選的還債來源帳戶挪出，用來加速償還信用卡、貸款或其他高壓力負債。",
    "zh-Hans": "只有有负债且开启还债优先时才出现，比例会从你勾选的还债来源账户挪出，用来加速偿还信用卡、贷款或其他高压力负债。",
    en: "Appears only when you have debt and enable debt priority. Its share is reallocated from the accounts you choose as debt funding sources.",
    ja: "負債があり、返済優先モードを有効にした場合だけ表示されます。配分は選択した口座から返済口座へ移されます。"
  }
};

const walletOptions = {
  TW: ["LINE Pay", "街口支付", "悠遊付", "icash Pay", "Pi 拍錢包", "台灣 Pay", "其他"],
  US: ["PayPal", "Venmo", "Cash App", "Apple Cash", "Zelle", "Other"],
  CA: ["PayPal", "Interac e-Transfer", "Apple Cash", "Other"],
  GB: ["PayPal", "Revolut", "Monzo", "Wise", "Other"],
  AU: ["PayPal", "PayID", "Wise", "Other"],
  DE: ["PayPal", "Klarna", "Revolut", "Wise", "Other"],
  FR: ["PayPal", "Lydia", "Paylib", "Revolut", "Other"],
  ES: ["PayPal", "Bizum", "Revolut", "Other"],
  IT: ["PayPal", "Satispay", "PostePay", "Other"],
  BR: ["Pix", "PayPal", "Mercado Pago", "PicPay", "Other"],
  MX: ["Mercado Pago", "PayPal", "CoDi", "Other"],
  CN: ["支付寶", "微信支付", "雲閃付", "其他"],
  HK: ["AlipayHK", "WeChat Pay HK", "PayMe", "Octopus", "Tap & Go", "其他"],
  SG: ["GrabPay", "PayNow", "Singtel Dash", "Other"],
  JP: ["PayPay", "LINE Pay", "楽天ペイ", "メルペイ", "その他"],
  KR: ["Kakao Pay", "Naver Pay", "Toss", "Other"],
  IN: ["UPI", "Paytm", "PhonePe", "Google Pay", "Other"],
  ID: ["GoPay", "OVO", "DANA", "ShopeePay", "Other"],
  TH: ["PromptPay", "TrueMoney", "Rabbit LINE Pay", "Other"],
  VN: ["MoMo", "ZaloPay", "VNPay", "Other"],
  AE: ["PayPal", "Apple Pay", "Careem Pay", "Other"]
};

const bankOptions = {
  TW: ["台灣銀行", "中國信託", "國泰世華", "玉山銀行", "台北富邦", "兆豐銀行", "第一銀行", "其他"],
  US: ["Chase", "Bank of America", "Wells Fargo", "Citi", "Capital One", "US Bank", "Other"],
  CA: ["RBC", "TD", "Scotiabank", "BMO", "CIBC", "Other"],
  GB: ["HSBC UK", "Barclays", "Lloyds", "NatWest", "Santander UK", "Monzo", "Other"],
  AU: ["Commonwealth Bank", "Westpac", "ANZ", "NAB", "Macquarie", "Other"],
  DE: ["Deutsche Bank", "Commerzbank", "Sparkasse", "DKB", "N26", "Other"],
  FR: ["BNP Paribas", "Crédit Agricole", "Société Générale", "BPCE", "La Banque Postale", "Other"],
  ES: ["Santander", "BBVA", "CaixaBank", "Sabadell", "Bankinter", "Other"],
  IT: ["Intesa Sanpaolo", "UniCredit", "Banco BPM", "BPER Banca", "Poste Italiane", "Other"],
  BR: ["Itaú", "Bradesco", "Banco do Brasil", "Caixa", "Nubank", "Other"],
  MX: ["BBVA México", "Citibanamex", "Santander México", "Banorte", "HSBC México", "Other"],
  CN: ["工商銀行", "建設銀行", "農業銀行", "中國銀行", "招商銀行", "交通銀行", "其他"],
  HK: ["HSBC", "Hang Seng Bank", "Bank of China HK", "Standard Chartered", "Citi", "其他"],
  SG: ["DBS", "OCBC", "UOB", "Standard Chartered", "Citibank", "Other"],
  JP: ["三菱UFJ銀行", "三井住友銀行", "みずほ銀行", "ゆうちょ銀行", "楽天銀行", "住信SBIネット銀行", "その他"],
  KR: ["KB Kookmin", "Shinhan Bank", "Hana Bank", "Woori Bank", "KakaoBank", "Other"],
  IN: ["State Bank of India", "HDFC Bank", "ICICI Bank", "Axis Bank", "Kotak Mahindra", "Other"],
  ID: ["Bank Mandiri", "BCA", "BRI", "BNI", "CIMB Niaga", "Other"],
  TH: ["Bangkok Bank", "Kasikornbank", "SCB", "Krungthai Bank", "Krungsri", "Other"],
  VN: ["Vietcombank", "BIDV", "VietinBank", "Techcombank", "MB Bank", "Other"],
  AE: ["Emirates NBD", "ADCB", "FAB", "Dubai Islamic Bank", "Mashreq", "Other"]
};

const currencyByCountry = {
  TW: "TWD",
  US: "USD",
  CA: "CAD",
  GB: "GBP",
  AU: "AUD",
  DE: "EUR",
  FR: "EUR",
  ES: "EUR",
  IT: "EUR",
  BR: "BRL",
  MX: "MXN",
  CN: "CNY",
  HK: "HKD",
  SG: "SGD",
  JP: "JPY",
  KR: "KRW",
  IN: "INR",
  ID: "IDR",
  TH: "THB",
  VN: "VND",
  AE: "AED"
};

const countryCostBand = {
  TW: "mid",
  US: "high",
  CA: "high",
  GB: "high",
  AU: "high",
  DE: "high",
  FR: "high",
  ES: "mid",
  IT: "mid",
  BR: "mid",
  MX: "mid",
  CN: "mid",
  HK: "high",
  SG: "high",
  JP: "high",
  KR: "high",
  IN: "mid",
  ID: "mid",
  TH: "mid",
  VN: "mid",
  AE: "high"
};

const assetColors = ["#176f66", "#bd7b12", "#d95d47", "#4759a6", "#b24766"];
const storageKey = "jarfolio-prototype-state-empty-v1";
const debtSacrificeOrder = ["play", "giving", "education", "longTermSavings", "financialFreedom"];
const defaultDebtSacrificeAccounts = ["play", "giving", "education", "longTermSavings"];
const supportedLanguages = ["zh-Hant", "zh-Hans", "en", "ja", "es", "fr", "de", "pt-BR", "ko", "id", "th", "vi", "hi", "ar"];

function detectBrowserLanguage() {
  const locale = navigator.languages?.[0] || navigator.language || "en";
  const normalized = locale.toLowerCase();
  if (normalized.startsWith("zh")) {
    return /(?:-cn|-sg|hans)/.test(normalized) ? "zh-Hans" : "zh-Hant";
  }
  if (normalized.startsWith("pt")) return "pt-BR";
  const match = supportedLanguages.find((language) => normalized === language.toLowerCase() || normalized.startsWith(`${language.toLowerCase()}-`));
  return match || "en";
}

function detectBrowserCountry() {
  const locale = navigator.languages?.[0] || navigator.language || "en-US";
  try {
    const region = new Intl.Locale(locale).maximize().region;
    return currencyByCountry[region] ? region : "US";
  } catch {
    return "US";
  }
}

const detectedCountry = detectBrowserCountry();

const defaultState = {
  language: detectBrowserLanguage(),
  country: detectedCountry,
  currency: currencyByCountry[detectedCountry] || "USD",
  onboardingComplete: false,
  monthlyIncome: 0,
  debtPriority: false,
  debtSacrificeAccounts: defaultDebtSacrificeAccounts,
  activeAssetTab: "liquid",
  accounts: [],
  investments: [],
  fixedAssets: [],
  receivables: [],
  liabilities: [],
  transactions: [],
  lastPriceSync: null
};

let state = loadState();
let editingTransactionId = null;
let onboardingStep = "language";

function nextDate(days) {
  return isoDate(days);
}

function isoDate(offsetDays = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);
  return date.toISOString().slice(0, 10);
}

function uid(prefix) {
  return `${prefix}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}

function loadState() {
  try {
    const stored = localStorage.getItem(storageKey);
    if (!stored) return structuredClone(defaultState);
    const parsed = JSON.parse(stored);
    return {
      ...structuredClone(defaultState),
      ...parsed,
      onboardingComplete: parsed.onboardingComplete ?? true
    };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function t(key) {
  return copy[state.language]?.[key] || copy.en[key] || copy["zh-Hant"][key] || key;
}

function label(key) {
  return categoryLabels[key]?.[state.language] || categoryLabels[key]?.en || categoryLabels[key]?.["zh-Hant"] || key;
}

function formatMoney(value, currency = state.currency, compact = false) {
  const options = compact
    ? { notation: "compact", maximumFractionDigits: 1 }
    : { maximumFractionDigits: currency === "JPY" ? 0 : 0 };
  return new Intl.NumberFormat(localeForLanguage(), {
    style: "currency",
    currency,
    ...options
  }).format(value || 0);
}

function localeForLanguage() {
  if (state.language === "en") return "en-US";
  if (state.language === "ja") return "ja-JP";
  if (state.language === "es") return "es-ES";
  if (state.language === "fr") return "fr-FR";
  if (state.language === "de") return "de-DE";
  if (state.language === "pt-BR") return "pt-BR";
  if (state.language === "ko") return "ko-KR";
  if (state.language === "id") return "id-ID";
  if (state.language === "th") return "th-TH";
  if (state.language === "vi") return "vi-VN";
  if (state.language === "hi") return "hi-IN";
  if (state.language === "ar") return "ar-AE";
  if (state.language === "zh-Hans") return "zh-CN";
  return "zh-TW";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function exchangeToDefault(value, currency) {
  const sourceRate = unitsPerUsd(currency) || unitsPerUsd(state.currency) || 1;
  const targetRate = unitsPerUsd(state.currency) || 1;
  return value / sourceRate * targetRate;
}

function unitsPerUsd(currency) {
  const unitsPerUsd = {
    USD: 1,
    TWD: 31.5,
    CNY: 7.24,
    HKD: 7.82,
    SGD: 1.36,
    JPY: 149,
    EUR: 0.92,
    GBP: 0.79,
    CAD: 1.37,
    AUD: 1.52,
    BRL: 5.45,
    MXN: 18.2,
    KRW: 1380,
    INR: 83.5,
    IDR: 16200,
    THB: 36.7,
    VND: 25400,
    AED: 3.67
  };
  return unitsPerUsd[currency];
}

function convertCurrency(value, fromCurrency, toCurrency) {
  const sourceRate = unitsPerUsd(fromCurrency) || 1;
  const targetRate = unitsPerUsd(toCurrency) || 1;
  return value / sourceRate * targetRate;
}

function monthlyIncomeUsd() {
  return convertCurrency(Number(state.monthlyIncome || 0), state.currency, "USD");
}

function incomePowerUsd() {
  const costFactor = {
    low: 0.8,
    mid: 1,
    high: 1.35
  };
  const cost = countryCostBand[state.country] || "mid";
  return monthlyIncomeUsd() / (costFactor[cost] || 1);
}

function supportedCurrencies() {
  return ["TWD", "USD", "CNY", "HKD", "SGD", "JPY", "EUR", "GBP", "CAD", "AUD", "BRL", "MXN", "KRW", "INR", "IDR", "THB", "VND", "AED"];
}

function investmentUnitPrice(item) {
  return Number(item.price ?? item.purchasePrice ?? item.averageCost ?? 0);
}

function investmentPriceCurrency(item) {
  return item.priceCurrency || item.currency || item.costCurrency || state.currency;
}

function investmentPurchasePrice(item) {
  return Number(item.purchasePrice ?? item.averageCost ?? item.price ?? 0);
}

function accountTotal() {
  return state.accounts.reduce((sum, account) => sum + Number(account.balance || 0), 0);
}

function investmentTotal() {
  return state.investments.reduce((sum, item) => {
    const value = Number(item.quantity || 0) * investmentUnitPrice(item);
    return sum + exchangeToDefault(value, investmentPriceCurrency(item));
  }, 0);
}

function fixedTotal() {
  return state.fixedAssets.reduce((sum, item) => sum + Number(item.currentValue || 0), 0);
}

function receivableTotal() {
  return state.receivables.reduce((sum, item) => sum + Number(item.amount || 0), 0);
}

function liabilityTotal() {
  return state.liabilities.reduce((sum, item) => sum + Number(item.balance || 0), 0);
}

function grossAssets() {
  return accountTotal() + investmentTotal() + fixedTotal() + receivableTotal();
}

function netWorth() {
  return grossAssets() - liabilityTotal();
}

function hasDebt() {
  return liabilityTotal() > 0;
}

function usesDebtPriority() {
  return state.debtPriority && hasDebt();
}

function selectedDebtSacrificeAccounts() {
  const selected = Array.isArray(state.debtSacrificeAccounts)
    ? state.debtSacrificeAccounts
    : defaultDebtSacrificeAccounts;
  const valid = debtSacrificeOrder.filter((key) => selected.includes(key));
  return valid.length ? valid : defaultDebtSacrificeAccounts;
}

function totalMinimumPayment() {
  return state.liabilities.reduce((sum, item) => sum + Number(item.minimumPayment || 0), 0);
}

function hasHighInterestDebt() {
  return state.liabilities.some((item) => {
    const type = item.type;
    const rate = Number(item.rate || 0);
    return type === "creditCard" || type === "consumerLoan" || rate >= 8;
  });
}

function debtPaydownTargetPercent() {
  const income = Number(state.monthlyIncome || monthlyIncomeTotal() || 0);
  const minimumPaymentPercent = income ? Math.ceil(totalMinimumPayment() / income * 100) : 0;
  let target = hasHighInterestDebt() ? 15 : 8;

  if (minimumPaymentPercent >= 18) {
    target = Math.max(target, 22);
  } else if (minimumPaymentPercent >= 12) {
    target = Math.max(target, 16);
  } else if (minimumPaymentPercent >= 8) {
    target = Math.max(target, 12);
  }

  if (minimumPaymentPercent > target) {
    target = minimumPaymentPercent + 2;
  }

  return Math.min(25, Math.max(6, target));
}

function applyDebtPriority(split) {
  const next = { ...split };
  const floors = {
    play: 0,
    giving: 0,
    education: 3,
    longTermSavings: 3,
    financialFreedom: 5
  };
  let remaining = debtPaydownTargetPercent();
  let moved = 0;

  selectedDebtSacrificeAccounts().forEach((key) => {
    if (!remaining) return;
    const floor = floors[key] ?? 0;
    const available = Math.max(0, Number(next[key] || 0) - floor);
    const take = Math.min(available, remaining);
    next[key] = Number(next[key] || 0) - take;
    remaining -= take;
    moved += take;
  });

  if (moved) next.debtPaydown = moved;
  return next;
}

function monthlyIncomeTotal() {
  return currentMonthTransactions()
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + Number(item.amount || 0), 0);
}

function monthlyExpenseTotal() {
  return currentMonthTransactions()
    .filter((item) => item.type === "expense" || item.type === "debtPayment")
    .reduce((sum, item) => sum + Number(item.amount || 0), 0);
}

function isCurrentMonth(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  return date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth();
}

function currentMonthTransactions() {
  return state.transactions.filter((item) => isCurrentMonth(item.date));
}

function monthlyReport() {
  const transactions = currentMonthTransactions();
  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const expense = transactions
    .filter((item) => item.type === "expense" || item.type === "debtPayment")
    .reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const categoryTotals = {};
  transactions
    .filter((item) => item.type === "expense" || item.type === "debtPayment")
    .forEach((item) => {
      categoryTotals[item.category] = (categoryTotals[item.category] || 0) + Number(item.amount || 0);
    });
  const topCategory = Object.entries(categoryTotals)
    .sort((a, b) => b[1] - a[1])[0];
  return {
    net: income - expense,
    topCategory: topCategory ? `${label(topCategory[0])} · ${formatMoney(topCategory[1], state.currency, true)}` : "-",
    savingsRate: income ? Math.round((income - expense) / income * 100) : 0,
    count: transactions.length
  };
}

function jarAllocation() {
  const cost = countryCostBand[state.country] || "mid";
  const incomePower = incomePowerUsd();
  let split = cost === "high"
    ? { necessities: 62, longTermSavings: 8, education: 8, play: 8, financialFreedom: 10, giving: 4 }
    : { necessities: 55, longTermSavings: 10, education: 10, play: 10, financialFreedom: 10, giving: 5 };

  if (incomePower >= 5500) {
    split = { necessities: 45, longTermSavings: 15, education: 10, play: 10, financialFreedom: 15, giving: 5 };
  }

  if (incomePower > 0 && incomePower <= 1800) {
    split = { necessities: 65, longTermSavings: 8, education: 7, play: 6, financialFreedom: 10, giving: 4 };
  }

  if (usesDebtPriority()) {
    split = applyDebtPriority(split);
  }

  return split;
}

function jarRows() {
  const split = jarAllocation();
  const colorMap = {
    necessities: "#176f66",
    longTermSavings: "#bd7b12",
    education: "#4759a6",
    play: "#d95d47",
    financialFreedom: "#4c9f70",
    giving: "#b24766",
    debtPaydown: "#263238"
  };
  return Object.entries(split).map(([key, percent]) => ({
    key,
    label: key === "debtPaydown" ? t("debtPaydownAccount") : t(key),
    percent,
    amount: state.monthlyIncome * percent / 100,
    color: colorMap[key] || "#176f66"
  }));
}

function accountDescription(key) {
  return accountDescriptions[key]?.[state.language] || accountDescriptions[key]?.en || accountDescriptions[key]?.["zh-Hant"] || "";
}

const cryptoMarketIds = {
  BTC: "bitcoin",
  ETH: "ethereum",
  SOL: "solana",
  BNB: "binancecoin",
  XRP: "ripple",
  ADA: "cardano",
  DOGE: "dogecoin",
  USDT: "tether",
  USDC: "usd-coin",
  DOT: "polkadot",
  AVAX: "avalanche-2",
  LINK: "chainlink",
  MATIC: "matic-network"
};

function investmentPriceTag(item) {
  if (item.type === "crypto" && item.priceUpdatedAt) {
    return `${t("livePrice")} · ${item.provider}`;
  }
  if (item.type === "crypto" && cryptoMarketIds[item.symbol]) {
    return `${t("purchasePrice")} ${formatMoney(investmentPurchasePrice(item), investmentPriceCurrency(item), true)} · CoinGecko`;
  }
  return `${t("purchasePrice")} ${formatMoney(investmentPurchasePrice(item), investmentPriceCurrency(item), true)} · ${t("needsMarketProvider")}`;
}

async function syncInvestmentPrices() {
  const cryptoItems = state.investments.filter((item) => item.type === "crypto" && cryptoMarketIds[item.symbol]);
  if (!cryptoItems.length) return 0;

  const ids = [...new Set(cryptoItems.map((item) => cryptoMarketIds[item.symbol]))];
  const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids.join(",")}&vs_currencies=usd`);
  if (!response.ok) throw new Error("Price provider unavailable");
  const prices = await response.json();
  let updated = 0;

  state.investments = state.investments.map((item) => {
    const marketId = cryptoMarketIds[item.symbol];
    const price = prices[marketId]?.usd;
    if (item.type !== "crypto" || !price) return item;
    updated += 1;
    return {
      ...item,
      price,
      priceCurrency: "USD",
      provider: "CoinGecko",
      priceUpdatedAt: new Date().toISOString()
    };
  });

  if (updated) state.lastPriceSync = new Date().toISOString();
  return updated;
}

function renderIcons() {
  document.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = icons[node.dataset.icon] || "";
  });
}

function renderI18n() {
  document.documentElement.lang = state.language;
  document.documentElement.dir = state.language === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (node.tagName === "OPTION") {
      node.textContent = t(key);
    } else {
      node.textContent = t(key);
    }
  });
  document.querySelectorAll("[data-placeholder-key]").forEach((node) => {
    node.placeholder = t(node.dataset.placeholderKey);
  });
  updateCountryOptionLabels(state.language);
}

function renderNavigation(active = document.querySelector(".app").dataset.view) {
  document.querySelector(".app").dataset.view = active;
  document.querySelectorAll(".nav-item, .bottom-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.target === active);
  });
  document.querySelectorAll("[data-view-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.viewPanel === active);
  });
  const titleKey = `page${active[0].toUpperCase()}${active.slice(1)}`;
  document.getElementById("pageTitle").textContent = t(titleKey);
}

function renderSummary() {
  document.getElementById("sidebarCurrency").textContent = state.currency;
  document.getElementById("priceStatusText").textContent = t("updated");
  document.getElementById("netWorthValue").textContent = formatMoney(netWorth());
  document.getElementById("netWorthHint").textContent = `${t("assetsTotal")} ${formatMoney(grossAssets(), state.currency, true)}`;
  document.getElementById("incomeValue").textContent = formatMoney(monthlyIncomeTotal());
  document.getElementById("expenseValue").textContent = formatMoney(monthlyExpenseTotal());
  const cashLeft = monthlyIncomeTotal() - monthlyExpenseTotal();
  document.getElementById("expenseHint").textContent = `${t("cashflow")} ${formatMoney(cashLeft)}`;
  const ratio = grossAssets() ? Math.round(liabilityTotal() / grossAssets() * 100) : 0;
  document.getElementById("debtRatioValue").textContent = `${ratio}%`;
  document.getElementById("assetTotalCompact").textContent = formatMoney(grossAssets() + liabilityTotal(), state.currency, true);
  document.getElementById("jarModePill").textContent = usesDebtPriority() ? t("debtMode") : t("standardMode");
  document.getElementById("totalDebtPill").textContent = formatMoney(liabilityTotal(), state.currency, true);
}

function renderMonthlyReport() {
  const report = monthlyReport();
  const rows = [
    { label: t("netCashflow"), value: formatMoney(report.net) },
    { label: t("largestExpenseCategory"), value: report.topCategory },
    { label: t("savingsRate"), value: `${report.savingsRate}%` },
    { label: t("transactionCount"), value: String(report.count) }
  ];
  document.getElementById("monthlyReportGrid").innerHTML = rows.map((item) => `
    <div class="report-item">
      <span>${escapeHtml(item.label)}</span>
      <b>${escapeHtml(item.value)}</b>
    </div>
  `).join("");
}

function renderAllocation() {
  const items = [
    { key: "liquidTotal", value: accountTotal(), color: assetColors[0] },
    { key: "investmentTotal", value: investmentTotal(), color: assetColors[1] },
    { key: "fixedTotal", value: fixedTotal(), color: assetColors[2] },
    { key: "receivableTotal", value: receivableTotal(), color: assetColors[3] },
    { key: "liabilityTotal", value: liabilityTotal(), color: assetColors[4] }
  ];
  const total = items.reduce((sum, item) => sum + item.value, 0) || 1;
  let cursor = 0;
  const segments = items.map((item) => {
    const start = cursor;
    cursor += item.value / total * 100;
    return `${item.color} ${start}% ${cursor}%`;
  }).join(", ");
  document.getElementById("assetDonut").style.setProperty("--chart", `conic-gradient(${segments})`);
  document.getElementById("assetLegend").innerHTML = items.map((item) => `
    <div class="legend-item">
      <div class="legend-key">
        <i class="swatch" style="background:${item.color}"></i>
        <span>${t(item.key)}</span>
      </div>
      <b>${formatMoney(item.value, state.currency, true)}</b>
    </div>
  `).join("");
}

function renderJars() {
  const rows = jarRows();
  const markup = rows.map((jar) => `
    <div class="jar-row">
      <div class="jar-label">
        <i class="swatch" style="background:${jar.color}"></i>
        <strong>${jar.label}</strong>
      </div>
      <div class="jar-meter"><span style="width:${jar.percent}%;background:${jar.color}"></span></div>
      <b>${jar.percent}% · ${formatMoney(jar.amount, state.currency, true)}</b>
    </div>
  `).join("");
  document.getElementById("jarList").innerHTML = markup;
  document.getElementById("settingsJarList").innerHTML = rows.map((jar) => `
    <details class="jar-detail">
      <summary>
        <span class="jar-label">
          <i class="swatch" style="background:${jar.color}"></i>
          <strong>${escapeHtml(jar.label)}</strong>
        </span>
        <b>${jar.percent}% · ${formatMoney(jar.amount, state.currency, true)}</b>
      </summary>
      <p>${escapeHtml(accountDescription(jar.key))}</p>
      <div class="jar-meter"><span style="width:${jar.percent}%;background:${jar.color}"></span></div>
    </details>
  `).join("");
}

function renderTransactions() {
  const accountMap = Object.fromEntries(state.accounts.map((account) => [account.id, account.name]));
  const filter = document.getElementById("transactionFilter")?.value || "all";
  const sorted = [...state.transactions].sort((a, b) => b.date.localeCompare(a.date));
  const filtered = filter === "all" ? sorted : sorted.filter((item) => item.type === filter);
  const markup = filtered.map((item) => {
    const tone = item.type === "income" ? "positive" : item.type === "transfer" ? "" : "negative";
    return `
      <div class="transaction-row" data-row-id="${escapeHtml(item.id)}">
        <div class="row-title">
          <strong>${escapeHtml(item.note || label(item.category))}</strong>
          <div class="row-meta">
            <span>${escapeHtml(label(item.category))}</span>
            <span>${escapeHtml(transactionAccountMeta(item, accountMap))}</span>
            <span>${escapeHtml(item.date)}</span>
          </div>
        </div>
        <div class="row-actions">
          <b class="amount ${tone}">${transactionAmountLabel(item)}</b>
          ${transactionActionButtons(item)}
        </div>
      </div>
    `;
  }).join("");
  document.getElementById("transactionList").innerHTML = markup;
  document.getElementById("recentTransactions").innerHTML = sorted.slice(0, 5).map((item) => {
    const tone = item.type === "income" ? "positive" : item.type === "transfer" ? "" : "negative";
    return `
      <div class="transaction-row" data-row-id="${escapeHtml(item.id)}">
        <div class="row-title">
          <strong>${escapeHtml(item.note || label(item.category))}</strong>
          <div class="row-meta"><span>${escapeHtml(label(item.category))}</span><span>${escapeHtml(transactionAccountMeta(item, accountMap))}</span><span>${escapeHtml(item.date)}</span></div>
        </div>
        <div class="row-actions">
          <b class="amount ${tone}">${transactionAmountLabel(item)}</b>
          ${transactionActionButtons(item)}
        </div>
      </div>
    `;
  }).join("");
  renderTransactionOptions();
}

function transactionAccountMeta(item, accountMap) {
  if (item.type === "transfer") {
    return `${accountMap[item.accountId] || t("account")} -> ${accountMap[item.toAccountId] || t("toAccount")}`;
  }
  return accountMap[item.accountId] || t("account");
}

function transactionAmountLabel(item) {
  if (item.type === "income") return `+${formatMoney(item.amount)}`;
  if (item.type === "transfer") return `↔ ${formatMoney(item.amount)}`;
  return `-${formatMoney(item.amount)}`;
}

function transactionActionButtons(item) {
  const title = item.note || label(item.category);
  return `
    <button class="row-delete" type="button" data-edit-transaction="${escapeHtml(item.id)}" aria-label="${escapeHtml(`${t("edit")}: ${title}`)}" title="${escapeHtml(t("edit"))}">
      ${icons.edit}
    </button>
    <button class="row-delete" type="button" data-delete-transaction="${escapeHtml(item.id)}" aria-label="${escapeHtml(`${t("delete")}: ${title}`)}" title="${escapeHtml(t("delete"))}">
      ${icons.trash}
    </button>
  `;
}

function renderTransactionOptions() {
  const transactionType = document.getElementById("transactionType");
  const categorySelect = document.getElementById("transactionCategory");
  const accountSelect = document.getElementById("transactionAccount");
  const transferWrap = document.getElementById("transferToWrap");
  const transferSelect = document.getElementById("transferToAccount");
  const accountHint = document.getElementById("transactionAccountHint");
  const submitButton = document.getElementById("transactionSubmit");
  const submitText = submitButton?.querySelector("[data-i18n]");
  if (!categorySelect || !accountSelect) return;
  categorySelect.innerHTML = Object.keys(categoryLabels)
    .map((key) => `<option value="${key}">${label(key)}</option>`)
    .join("");
  const isTransfer = transactionType?.value === "transfer";
  if (transferWrap) transferWrap.hidden = !isTransfer;

  if (!state.accounts.length) {
    accountSelect.innerHTML = `<option value="">${escapeHtml(t("noAccountOption"))}</option>`;
    accountSelect.disabled = true;
    if (accountHint) accountHint.hidden = false;
    if (accountHint) accountHint.textContent = t("selectAccountFirst");
    if (submitButton) submitButton.disabled = true;
    if (transferSelect) transferSelect.innerHTML = "";
    return;
  }

  accountSelect.innerHTML = state.accounts
    .map((account) => `<option value="${escapeHtml(account.id)}">${escapeHtml(account.name)}</option>`)
    .join("");
  accountSelect.disabled = false;
  renderTransferAccountOptions();
  const transferBlocked = isTransfer && state.accounts.length < 2;
  if (accountHint) accountHint.hidden = !transferBlocked;
  if (accountHint && transferBlocked) accountHint.textContent = t("needTwoAccountsForTransfer");
  if (submitButton) submitButton.disabled = transferBlocked;
  if (submitText) submitText.textContent = editingTransactionId ? t("updateTransaction") : t("saveTransaction");
  document.getElementById("transactionCancelEdit").hidden = !editingTransactionId;
}

function renderTransferAccountOptions() {
  const transferSelect = document.getElementById("transferToAccount");
  const accountSelect = document.getElementById("transactionAccount");
  if (!transferSelect || !accountSelect) return;
  const fromId = accountSelect.value;
  const options = state.accounts.filter((account) => account.id !== fromId);
  transferSelect.innerHTML = options
    .map((account) => `<option value="${escapeHtml(account.id)}">${escapeHtml(account.name)}</option>`)
    .join("");
}

function renderQuickAccountState() {
  const details = document.getElementById("quickAccountDetails");
  if (!details) return;
  if (!state.accounts.length) details.open = true;
}

function renderInvestmentCurrencyOptions() {
  const select = document.getElementById("investmentCurrency");
  if (!select) return;
  select.innerHTML = supportedCurrencies()
    .map((currency) => `<option value="${currency}">${currency}</option>`)
    .join("");
  select.value = state.currency;
}

function typeLabel(type) {
  const map = {
    cash: "cash",
    eWallet: "eWallet",
    bank: "bankAccount",
    stock: "stock",
    etf: "ETF",
    fund: "fund",
    crypto: "crypto",
    metal: "metal",
    realEstate: "realEstate",
    vehicle: "vehicle",
    creditCard: "creditCard",
    mortgage: "mortgage",
    autoLoan: "autoLoan",
    consumerLoan: "consumerLoan",
    educationLoan: "educationLoan",
    otherLoan: "otherLoan",
    other: "other"
  };
  return map[type] === "ETF" ? "ETF" : t(map[type] || "other");
}

function renderAssets() {
  document.querySelectorAll(".asset-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.assetTab === state.activeAssetTab);
  });
  document.querySelectorAll(".asset-form").forEach((form) => {
    form.classList.toggle("active", form.dataset.assetForm === state.activeAssetTab);
  });

  const titleMap = {
    liquid: t("liquidFunds"),
    investments: t("investments"),
    fixed: t("fixedAssets"),
    receivables: t("receivables")
  };
  document.getElementById("assetFormTitle").textContent = titleMap[state.activeAssetTab];
  document.getElementById("assetListTitle").textContent = titleMap[state.activeAssetTab];
  document.getElementById("assetFormEyebrow").textContent = titleMap[state.activeAssetTab];

  let rows = "";
  if (state.activeAssetTab === "liquid") {
    rows = state.accounts.map((item) => assetRow("accounts", item.id, item.name, accountMeta(item), formatMoney(item.balance))).join("");
  }
  if (state.activeAssetTab === "investments") {
    rows = state.investments.map((item) => {
      const value = exchangeToDefault(Number(item.quantity || 0) * investmentUnitPrice(item), investmentPriceCurrency(item));
      return assetRow("investments", item.id, `${item.symbol} · ${item.name}`, `${typeLabel(item.type)} · ${item.provider}`, formatMoney(value), investmentPriceTag(item));
    }).join("");
  }
  if (state.activeAssetTab === "fixed") {
    rows = state.fixedAssets.map((item) => assetRow("fixedAssets", item.id, item.name, typeLabel(item.type), formatMoney(item.currentValue))).join("");
  }
  if (state.activeAssetTab === "receivables") {
    rows = state.receivables.map((item) => assetRow("receivables", item.id, item.person, `${t("dueDate")} ${item.dueDate}`, formatMoney(item.amount), statusLabel(item.status))).join("");
  }
  document.getElementById("assetList").innerHTML = rows;
}

function accountMeta(item) {
  const type = typeLabel(item.type);
  return item.provider ? `${type} · ${item.provider}` : type;
}

function assetRow(collection, id, title, meta, amount, tag = "") {
  const safeTitle = escapeHtml(title);
  const deleteLabel = escapeHtml(`${t("delete")}: ${title}`);
  return `
    <div class="asset-row" data-row-id="${escapeHtml(id)}">
      <div class="row-title">
        <strong>${safeTitle}</strong>
        <div class="row-meta"><span>${escapeHtml(meta)}</span>${tag ? `<span>${escapeHtml(tag)}</span>` : ""}</div>
      </div>
      <div class="row-actions">
        <b>${amount}</b>
        <button class="row-delete" type="button" data-delete-asset="${escapeHtml(collection)}" data-delete-id="${escapeHtml(id)}" aria-label="${deleteLabel}" title="${escapeHtml(t("delete"))}">
          ${icons.trash}
        </button>
      </div>
    </div>
  `;
}

function statusLabel(status) {
  return status === "partial" ? t("partial") : status === "overdue" ? t("overdue") : t("open");
}

function renderLiabilities() {
  const rows = state.liabilities.map((item) => `
    <div class="liability-row" data-row-id="${escapeHtml(item.id)}">
      <div class="row-title">
        <strong>${escapeHtml(item.name)}</strong>
        <div class="row-meta">
          <span>${typeLabel(item.type)}</span>
          <span>${t("rate")} ${item.rate}%</span>
          <span>${t("cardDue")} ${escapeHtml(item.dueDate)}</span>
        </div>
      </div>
      <div class="row-actions">
        <b>${formatMoney(item.balance)}</b>
        <button class="row-delete" type="button" data-delete-liability="${escapeHtml(item.id)}" aria-label="${escapeHtml(`${t("delete")}: ${item.name}`)}" title="${escapeHtml(t("delete"))}">
          ${icons.trash}
        </button>
      </div>
    </div>
  `).join("");
  document.getElementById("liabilityList").innerHTML = rows;
}

function renderWalletOptions() {
  document.querySelectorAll("[data-provider-wrap]").forEach((wrap) => {
    const form = wrap.closest("form");
    const type = form?.querySelector('select[name="type"]')?.value || "cash";
    const select = wrap.querySelector("[data-wallet-provider]");
    const customInput = wrap.querySelector("[data-custom-provider]");
    const showPreset = type === "eWallet" || type === "bank";
    const previousType = wrap.dataset.providerType;
    const options = type === "bank"
      ? bankOptions[state.country] || bankOptions.US
      : walletOptions[state.country] || walletOptions.US;

    wrap.hidden = type === "cash";

    if (select) {
      const selectedValue = select.value;
      select.innerHTML = options
        .map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`)
        .join("");
      if (previousType === type && options.includes(selectedValue)) {
        select.value = selectedValue;
      }
      select.hidden = !showPreset;
      select.disabled = !showPreset;
      select.name = showPreset ? "provider" : "";
    }

    if (customInput) {
      const showCustom = type === "other" || (showPreset && isOtherProvider(select?.value));
      customInput.hidden = !showCustom;
      customInput.disabled = !showCustom;
      customInput.name = showCustom ? "customProvider" : "";
      customInput.placeholder = t("provider");
      if (!showCustom) customInput.value = "";
    }

    wrap.dataset.providerType = type;
  });
}

function isOtherProvider(value) {
  return ["other", "其他", "その他"].includes(String(value || "").trim().toLowerCase());
}

function addAccountFromForm(form) {
  const type = String(form.get("type") || "cash");
  const name = String(form.get("name") || "").trim();
  const customProvider = String(form.get("customProvider") || "").trim();
  const providerValue = customProvider || form.get("provider");
  const provider = type === "cash" ? "" : String(providerValue || "").trim();
  state.accounts.push({
    id: uid("a"),
    type,
    provider,
    name: name || provider || typeLabel(type) || t("account"),
    balance: Number(form.get("balance") || 0)
  });
}

function renderSettings() {
  const hasAnyDebt = hasDebt();
  document.getElementById("quickLanguage").value = state.language;
  document.getElementById("languageSelect").value = state.language;
  document.getElementById("countrySelect").value = state.country;
  document.getElementById("currencySelect").value = state.currency;
  document.getElementById("monthlyIncomeInput").value = state.monthlyIncome || "";
  const debtToggle = document.getElementById("debtPriorityToggle");
  debtToggle.checked = usesDebtPriority();
  debtToggle.disabled = !hasAnyDebt;
  debtToggle.closest(".switch-row").classList.toggle("disabled", !hasAnyDebt);
  document.getElementById("debtPriorityHint").hidden = hasAnyDebt;
  const sacrificePanel = document.getElementById("debtSacrificePanel");
  if (sacrificePanel) {
    const selected = selectedDebtSacrificeAccounts();
    sacrificePanel.hidden = !hasAnyDebt;
    sacrificePanel.classList.toggle("disabled", !hasAnyDebt);
    sacrificePanel.querySelectorAll('input[name="debtSacrificeAccounts"]').forEach((input) => {
      input.checked = selected.includes(input.value);
      input.disabled = !hasAnyDebt;
    });
  }
  const incomeHint = document.getElementById("incomePowerHint");
  if (incomeHint) {
    const usd = monthlyIncomeUsd();
    const power = incomePowerUsd();
    incomeHint.textContent = state.monthlyIncome
      ? `${t("incomePowerHint")} ${formatMoney(usd, "USD", true)} / ${formatMoney(power, "USD", true)}`
      : t("incomePowerHint");
  }
}

function populateOnboardingOptions() {
  const languageSelect = document.getElementById("onboardingLanguage");
  const countrySelect = document.getElementById("onboardingCountry");
  if (!languageSelect.options.length) {
    languageSelect.innerHTML = document.getElementById("languageSelect").innerHTML;
  }
  if (!countrySelect.options.length) {
    countrySelect.innerHTML = document.getElementById("countrySelect").innerHTML;
  }
}

function updateOnboardingLanguage(language) {
  const messages = onboardingMessages[language] || onboardingMessages.en;
  const overlay = document.getElementById("onboardingOverlay");
  overlay.lang = language;
  overlay.dir = language === "ar" ? "rtl" : "ltr";
  document.getElementById("onboardingEyebrow").textContent = messages.eyebrow;
  const isRegionStep = onboardingStep === "region";
  document.getElementById("onboardingTitle").textContent = isRegionStep ? messages.regionTitle : messages.title;
  document.getElementById("onboardingIntro").textContent = isRegionStep ? messages.regionIntro : messages.intro;
  document.getElementById("onboardingNext").textContent = messages.next;
  document.getElementById("onboardingBack").textContent = messages.back;
  document.getElementById("onboardingContinue").textContent = messages.continue;
  document.getElementById("onboardingLanguageLabel").textContent = copy[language]?.language || copy.en.language;
  document.getElementById("onboardingCountryLabel").textContent = copy[language]?.country || copy.en.country;
  document.getElementById("onboardingProgressLanguageText").textContent = copy[language]?.language || copy.en.language;
  document.getElementById("onboardingProgressCountryText").textContent = copy[language]?.country || copy.en.country;
  updateCountryOptionLabels(language);
}

function setOnboardingStep(step) {
  onboardingStep = step;
  const isRegionStep = step === "region";
  document.getElementById("onboardingLanguageStep").hidden = isRegionStep;
  document.getElementById("onboardingCountryStep").hidden = !isRegionStep;
  document.getElementById("onboardingProgressLanguage").classList.toggle("complete", isRegionStep);
  document.getElementById("onboardingProgressLanguage").classList.toggle("active", !isRegionStep);
  document.getElementById("onboardingProgressCountry").classList.toggle("active", isRegionStep);
  updateOnboardingLanguage(document.getElementById("onboardingLanguage").value || state.language);
}

function renderOnboarding() {
  const overlay = document.getElementById("onboardingOverlay");
  if (state.onboardingComplete) {
    overlay.hidden = true;
    document.body.classList.remove("onboarding-open");
    return;
  }
  populateOnboardingOptions();
  document.getElementById("onboardingLanguage").value = state.language;
  document.getElementById("onboardingCountry").value = state.country;
  setOnboardingStep("language");
  overlay.hidden = false;
  document.body.classList.add("onboarding-open");
}

function render() {
  renderIcons();
  renderI18n();
  renderNavigation();
  renderSummary();
  renderMonthlyReport();
  renderAllocation();
  renderJars();
  renderTransactions();
  renderAssets();
  renderLiabilities();
  renderWalletOptions();
  renderQuickAccountState();
  renderInvestmentCurrencyOptions();
  renderSettings();
  renderOnboarding();
}

function toast(message) {
  const node = document.getElementById("toast");
  node.textContent = message;
  node.classList.add("visible");
  window.clearTimeout(toast.timer);
  toast.timer = window.setTimeout(() => node.classList.remove("visible"), 1600);
}

function deleteAsset(collection, id) {
  const allowedCollections = ["accounts", "investments", "fixedAssets", "receivables"];
  if (!allowedCollections.includes(collection)) return;
  state[collection] = state[collection].filter((item) => item.id !== id);
  saveState();
  render();
  toast(t("deleted"));
}

function deleteLiability(id) {
  state.liabilities = state.liabilities.filter((item) => item.id !== id);
  if (!hasDebt()) state.debtPriority = false;
  saveState();
  render();
  toast(t("deleted"));
}

function adjustAccountBalance(accountId, amount) {
  const account = state.accounts.find((item) => item.id === accountId);
  if (!account) return;
  account.balance = Number(account.balance || 0) + amount;
}

function applyTransactionEffect(transaction, direction = 1) {
  const amount = Number(transaction.amount || 0);
  if (transaction.type === "income") adjustAccountBalance(transaction.accountId, amount * direction);
  if (transaction.type === "expense" || transaction.type === "debtPayment") adjustAccountBalance(transaction.accountId, -amount * direction);
  if (transaction.type === "transfer") {
    adjustAccountBalance(transaction.accountId, -amount * direction);
    adjustAccountBalance(transaction.toAccountId, amount * direction);
  }
}

function deleteTransaction(id) {
  const transaction = state.transactions.find((item) => item.id === id);
  if (!transaction) return;
  applyTransactionEffect(transaction, -1);
  state.transactions = state.transactions.filter((item) => item.id !== id);
  saveState();
  render();
  toast(t("deleted"));
}

function transactionFromForm(form, existing = {}) {
  return {
    id: existing.id || uid("t"),
    type: form.get("type"),
    amount: Number(form.get("amount") || 0),
    category: form.get("category"),
    accountId: form.get("account"),
    toAccountId: form.get("toAccount") || null,
    note: form.get("note"),
    date: existing.date || isoDate(0)
  };
}

function resetTransactionForm() {
  editingTransactionId = null;
  document.getElementById("transactionForm").reset();
  renderTransactionOptions();
}

function startEditTransaction(id) {
  const transaction = state.transactions.find((item) => item.id === id);
  if (!transaction) return;
  editingTransactionId = id;
  renderNavigation("ledger");
  const form = document.getElementById("transactionForm");
  form.elements.type.value = transaction.type;
  renderTransactionOptions();
  form.elements.amount.value = transaction.amount;
  form.elements.category.value = transaction.category;
  form.elements.account.value = transaction.accountId;
  renderTransferAccountOptions();
  if (transaction.toAccountId) form.elements.toAccount.value = transaction.toAccountId;
  form.elements.note.value = transaction.note || "";
  document.getElementById("transactionCancelEdit").hidden = false;
  document.querySelector("#transactionSubmit [data-i18n]").textContent = t("updateTransaction");
}

function bindEvents() {
  document.getElementById("onboardingLanguage").addEventListener("change", (event) => {
    updateOnboardingLanguage(event.target.value);
  });

  document.getElementById("onboardingNext").addEventListener("click", () => {
    setOnboardingStep("region");
  });

  document.getElementById("onboardingBack").addEventListener("click", () => {
    setOnboardingStep("language");
  });

  document.getElementById("onboardingForm").addEventListener("submit", (event) => {
    event.preventDefault();
    if (onboardingStep !== "region") {
      setOnboardingStep("region");
      return;
    }
    const form = new FormData(event.currentTarget);
    state.language = form.get("language");
    state.country = form.get("country");
    state.currency = currencyByCountry[state.country] || state.currency;
    state.onboardingComplete = true;
    saveState();
    render();
  });

  document.querySelectorAll("[data-target]").forEach((button) => {
    button.addEventListener("click", () => renderNavigation(button.dataset.target));
  });

  document.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => renderNavigation(button.dataset.jump));
  });

  document.getElementById("quickLanguage").addEventListener("change", (event) => {
    state.language = event.target.value;
    saveState();
    render();
  });

  document.getElementById("lockButton").addEventListener("click", () => toast(t("locked")));

  document.getElementById("syncPrices").addEventListener("click", async () => {
    const button = document.getElementById("syncPrices");
    button.disabled = true;
    try {
      const updated = await syncInvestmentPrices();
      saveState();
      render();
      toast(updated ? t("priceSyncPartial") : t("priceSyncUnavailable"));
    } catch {
      toast(t("priceSyncUnavailable"));
    } finally {
      button.disabled = false;
    }
  });

  document.getElementById("transactionType").addEventListener("change", renderTransactionOptions);
  document.getElementById("transactionAccount").addEventListener("change", renderTransferAccountOptions);
  document.getElementById("transactionCancelEdit").addEventListener("click", resetTransactionForm);

  document.getElementById("transactionForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const accountId = form.get("account");
    const type = form.get("type");
    const account = state.accounts.find((item) => item.id === accountId);
    if (!account) {
      toast(t("selectAccountFirst"));
      renderTransactionOptions();
      return;
    }
    if (type === "transfer") {
      const toAccountId = form.get("toAccount");
      if (!toAccountId || toAccountId === accountId) {
        toast(t("needTwoAccountsForTransfer"));
        renderTransactionOptions();
        return;
      }
    }
    const existing = editingTransactionId ? state.transactions.find((item) => item.id === editingTransactionId) : null;
    const nextTransaction = transactionFromForm(form, existing || {});
    if (existing) {
      applyTransactionEffect(existing, -1);
      state.transactions = state.transactions.map((item) => item.id === existing.id ? nextTransaction : item);
    } else {
      state.transactions.unshift(nextTransaction);
    }
    applyTransactionEffect(nextTransaction, 1);
    editingTransactionId = null;
    event.currentTarget.reset();
    saveState();
    render();
    toast(t("saved"));
  });

  document.getElementById("transactionFilter").addEventListener("change", renderTransactions);

  ["transactionList", "recentTransactions"].forEach((listId) => {
    document.getElementById(listId).addEventListener("click", (event) => {
      const editButton = event.target.closest("[data-edit-transaction]");
      if (editButton) {
        startEditTransaction(editButton.dataset.editTransaction);
        return;
      }
      const button = event.target.closest("[data-delete-transaction]");
      if (!button) return;
      if (!window.confirm(t("deleteTransactionConfirm"))) return;
      deleteTransaction(button.dataset.deleteTransaction);
    });
  });

  document.getElementById("assetList").addEventListener("click", (event) => {
    const button = event.target.closest("[data-delete-asset]");
    if (!button) return;
    if (!window.confirm(t("deleteAssetConfirm"))) return;
    deleteAsset(button.dataset.deleteAsset, button.dataset.deleteId);
  });

  document.getElementById("liabilityList").addEventListener("click", (event) => {
    const button = event.target.closest("[data-delete-liability]");
    if (!button) return;
    if (!window.confirm(t("deleteLiabilityConfirm"))) return;
    deleteLiability(button.dataset.deleteLiability);
  });

  document.querySelectorAll(".asset-tab").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeAssetTab = button.dataset.assetTab;
      saveState();
      renderAssets();
    });
  });

  document.getElementById("liquidType").addEventListener("change", renderWalletOptions);
  document.getElementById("quickLiquidType").addEventListener("change", renderWalletOptions);
  document.querySelectorAll("[data-wallet-provider]").forEach((select) => {
    select.addEventListener("change", renderWalletOptions);
  });

  document.getElementById("quickAccountForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    addAccountFromForm(form);
    event.currentTarget.reset();
    document.getElementById("quickAccountDetails").open = false;
    saveState();
    render();
    toast(t("saved"));
  });

  document.getElementById("liquidForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    addAccountFromForm(form);
    event.currentTarget.reset();
    saveState();
    render();
    toast(t("saved"));
  });

  document.getElementById("investmentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const symbol = String(form.get("symbol") || "").toUpperCase();
    const purchasePrice = Number(form.get("purchasePrice") || 0);
    const priceCurrency = form.get("currency") || state.currency;
    state.investments.push({
      id: uid("i"),
      type: form.get("type"),
      symbol,
      name: symbol,
      quantity: Number(form.get("quantity") || 0),
      purchasePrice,
      averageCost: purchasePrice,
      price: purchasePrice,
      priceCurrency,
      costCurrency: priceCurrency,
      provider: "Manual"
    });
    saveState();
    render();
    toast(t("saved"));
  });

  document.getElementById("fixedForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    state.fixedAssets.push({
      id: uid("f"),
      type: form.get("type"),
      name: form.get("name"),
      purchaseValue: Number(form.get("purchaseValue") || 0),
      currentValue: Number(form.get("currentValue") || 0)
    });
    saveState();
    render();
    toast(t("saved"));
  });

  document.getElementById("receivableForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    state.receivables.push({
      id: uid("r"),
      person: form.get("person"),
      amount: Number(form.get("amount") || 0),
      dueDate: form.get("dueDate") || isoDate(30),
      status: form.get("status")
    });
    saveState();
    render();
    toast(t("saved"));
  });

  document.getElementById("liabilityForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    state.liabilities.push({
      id: uid("l"),
      type: form.get("type"),
      name: form.get("name"),
      balance: Number(form.get("balance") || 0),
      rate: Number(form.get("rate") || 0),
      dueDate: form.get("dueDate") || isoDate(30),
      minimumPayment: Number(form.get("minimumPayment") || 0)
    });
    saveState();
    render();
    toast(t("saved"));
  });

  document.getElementById("settingsForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    state.language = form.get("language");
    state.country = form.get("country");
    state.currency = form.get("currency");
    state.monthlyIncome = Number(form.get("monthlyIncome") || 0);
    state.debtPriority = hasDebt() && form.get("debtPriority") === "on";
    const sacrificeAccounts = form.getAll("debtSacrificeAccounts")
      .filter((key) => debtSacrificeOrder.includes(key));
    state.debtSacrificeAccounts = sacrificeAccounts.length ? sacrificeAccounts : defaultDebtSacrificeAccounts;
    saveState();
    render();
    toast(t("saved"));
  });

  document.getElementById("countrySelect").addEventListener("change", (event) => {
    const nextCurrency = currencyByCountry[event.target.value];
    if (nextCurrency) document.getElementById("currencySelect").value = nextCurrency;
  });
}

bindEvents();
render();
