// サイドバーの店舗をレンダリング
/*eslint-disable no-undef, no-undef, semi, semi, semi*/
Vue.component('store-item', {
    props: ['store'],
    // template: '<dd><a :href="store.url"><img :alt="store.text" :src="store.menuFile"></a></dd>'
    template: '<dd><a :href="store.url">{{ store.text }}</a></dd>'
})

// メニューバーの店舗をレンダリング
Vue.component('menu-store-item', {
    props: ['store'],
    template: '<dd><a :href="store.url">{{ store.text }}</a></dd>'
})

// ニュースをレンダリング
Vue.component('news-item', {
    props: ['news'],
    template: '<dev><dt><time :datetime="news.dateTime">{{ news.dateTime }}</time></dt><dd>{{ news.text }}</dd></dev>'
})

// 会社概要をレンダリング
Vue.component('company-item', {
    props: ['company',],
    template: '<table class="table"><tbody><tr v-for="(value, key) in company"><td>{{ key }}</td><td><p v-for="text in value">{{ text }}</p></td></tr></tbody></table>'
})

// 会社沿革をレンダリング
Vue.component('history-item', {
    props: ['history'],
    // template: '<tr><td>{{ history.yearMonth }}</td><td>{{ history.text }}</td></tr>'
    template: '<dev><dt><time :datetime="history.yearMonth">{{ history.yearMonth }}</time></dt><dd>{{ history.text }}</dd></dev>'
})

// 経営理念・社訓をレンダリング
Vue.component('motto-item', {
    props: ['motto',],
    template: '<table class="table"><tbody><tr v-for="(value, key) in motto"><td>【{{ key }}】</td><td><p v-for="text in value">一、{{ text }}</p></td></tr></tbody></table>'
})

// 求人情報をレンダリング
Vue.component('recrit-item', {
    props: ['recrit'],
    template: '<table class="table"><tbody><tr v-for="(value, key) in recrit">'+
              '<td>{{ key }}</td><td><p v-for="text in value">{{ text }}</p></td></tr></tbody></table>'
})

// 店舗情報をレンダリング
Vue.component('shop-item', {
    props: ['shop'],
    template: '<div class="row"><table class="table table-striped">' +
              '<thead><tr><th>#</th><th>内容</th></tr></thead>' +
              '<tbody><tr v-for="(value, key) in shop"><td>{{ key }}</td><td><p v-for="text in value">{{ text }}</p></td></tr></tbody>' +
              '</table></div>'                                          
})

// カルーセルをレンダリング
Vue.component('carousel-item', {
    props: ['carousel'],
    template: '<div  :class="\'item \'+ carousel.activItem">' +
              '<img :alt="carousel.title" :src="\'./img/\'+ carousel.fileName" class="img-rounded">' +
              '<div class="carousel-caption"><h1>{{ carousel.title }}</h1><p>{{ carousel.text }}</p></div>' +
              '</div>'
})


/* *******************************************************************
   カルーセルの画像の変更はこちら
     - fileName：imgフォルダにある画像ファイルを選択する。
     - activeItem：activeを入れたところから表示が開始されます。
     - title：タイトルです。適当に入れてください。
******************************************************************* */
var img_items = [
    { fileName: 'mise.jpg', activItem: 'active', title: 'First slide', text: 'aaa' },
    { fileName: 'mise2.jpg', activItem: '', title: 'Second slide', text: 'aaa'   },
    { fileName: 'mise3.jpg', activItem: '', title: 'Second slide', text: 'aaa'   },
    { fileName: 'mise4.jpg', activItem: '', title: 'Second slide', text: 'aaa'   },
    { fileName: 'mise5.jpg', activItem: '', title: 'Third slide', text: 'aaa'   }
]

/* *******************************************************************
   ニュースの追加・変更はこちら
     - dateTime：表示する日付を記載。
     - text：表示する内容を記載。
******************************************************************* */
var news_items = [
    { dateTime: '2018/10/25', text: 'ホームページを' },
    { dateTime: '2018/10/24', text: 'なななな、なんと' },
    { dateTime: '2018/10/23', text: 'リニューアル' },
    { dateTime: '2018/10/22', text: 'しました！！！！！' }
]

/* *******************************************************************
   店舗の追加・変更はこちら
   ※店舗の追加の際は別途index.htmlも修正しないといけません。
******************************************************************* */
var store_items = [
    {
        text: 'P-WORLD 厚木店',
        menuFile: './img/menuatsugi1.gif', 
        mapFile: './img/map-atsugi.gif',
        url: 'http://www.p-world.co.jp/kanagawa/sinse-atugi.htm'
    },
    {
        text: 'P-WORLD 厚木スロット店', 
        menuFile: './img/menuatsugislot1.gif',
        mapFile: './img/map-atsugi.gif',
        url: 'http://www.p-world.co.jp/kanagawa/sinse-atugi.htm'
    },
    {
        text: 'P-WORLD 平塚店',
        menuFile: './img/menuhiratsuka1.gif',
        mapFile: './img/map-hiratsuka.gif',
        url: 'http://www.p-world.co.jp/kanagawa/sinse.htm'
    },
    {
        text: 'P-WORLD 南足柄店',
        menuFile: './img/menuminami1.gif',
        mapFile: './img/map-minami.gif',
        url: 'http://www.p-world.co.jp/kanagawa/sinse-.htm'
    }
]

/* *******************************************************************
   店舗情報の追加・変更はこちら
   ※店舗の追加の際は別途index.htmlも修正しないといけません。
******************************************************************* */
var store_objects = {
    atsugi1: {
        店舗:       ['厚木店'],
        電話:       ['046-245-3311'],
        住所:       ['神奈川県厚木市下川入17-1'],
        交通:       ['本厚木駅から車で20分国道129号線山際交差点すぐ近く'],
        設置台数:   ['CR：304台'],
        定休日:     ['無し'] ,
        営業形態:   ['全台無制限'],
        営業時間:   ['9：00～23：00'],
        駐車場台数: ['230台']
    },
    atsugi2: {
        店舗:       ['厚木スロット店'],
        電話:       ['046-245-6806'],
        住所:       ['神奈川県厚木市下川入13-1'],
        交通:       ['本厚木駅から車で20分国道129号線山際交差点すぐ近く'],
        設置台数:   ['CR：304台'],
        定休日:     ['無し'] ,
        営業形態:   ['全台無制限'],
        営業時間:   ['9：00～23：00'],
        駐車場台数: ['230台']
    },
    hiratsuka: {
        店舗:       ['平塚店'],
        電話:       ['0463-24-2678'],
        住所:       ['神奈川県平塚市四之宮2-4-16'],
        交通:       ['本厚木駅'],
        設置台数:   ['CR：304台'],
        定休日:     ['無し'] ,
        営業形態:   ['全台無制限'],
        営業時間:   ['9：00～23：00'],
        駐車場台数: ['230台']
    },
    minamiashigara: {
        店舗:       ['南足柄店'],
        電話:       ['0465-74-4141'],
        住所:       ['神奈川県南足柄市飯沢43-1'],
        交通:       ['本厚木駅'],
        設置台数:   ['CR：304台'],
        定休日:     ['無し'] ,
        営業形態:   ['全台無制限'],
        営業時間:   ['9：00～23：00'],
        駐車場台数: ['230台']
    }
}

/* *******************************************************************
   会社概要の変更はこちら
******************************************************************* */
var company_object = {
    本部名称:   ['本部事務センター'],
    本部所在地: ['神奈川県小田原市南鴨宮3-12-4',
                 ' 新清第8ビル3階'],
    本部電話:   ['0465-34-1155'],
    事業内容:   ['遊技場の経営',
                 '不動産賃貸業'],
    役員:       ['代表取締役社長 大塚 光二'],
    従業員数:   ['143名',
                 ' 男性: 66名',
                 ' 女性: 77名', 
                 '内、パートアルバイト・嘱託105名）']
}

var history_items = [
    { yearMonth: '1973/08', text: '株式会社新清を設立しスーパーマーケット『シンセー』開店' },
    { yearMonth: '1993/06', text: 'パチンコ『シンセー八億』厚木店開店（280台）' },
    { yearMonth: '1995/03', text: 'パチンコ『シンセー八億』平塚店開店（352台）' },
    { yearMonth: '1997/03', text: 'パチンコ『シンセー八億』南足柄店開店（340台）' },
    { yearMonth: '1997/04', text: '関連会社として株式会社新清開発設立' },
    { yearMonth: '1997/06', text: 'パチンコ『シンセー八億』平塚店開店増築（500台）' },
    { yearMonth: '1998/03', text: 'パチンコ『シンセー八億』田村店開店（376台）' },
    { yearMonth: '2001/01', text: '厚木スロット店開店（150台）' },
    { yearMonth: '2002/03', text: 'パチンコ『シンセー八億』田村店増台（403台）' },
    { yearMonth: '2003/05', text: '株式会社新清開発吸収合併' },
    { yearMonth: '2005/04', text: 'パチンコ『シンセー八億』平塚店リニューアル開店(500台)' },
    { yearMonth: '2005/12', text: 'パチンコ『シンセー八億』厚木パチンコ館リニューアル開店(320台)' },
    { yearMonth: '2006/11', text: 'パチンコ『シンセー八億』厚木店リニューアル開店(438台)' },
    { yearMonth: '2006/11', text: 'パチンコ『シンセー八億』平塚店リニューアル開店(428台)' },
    { yearMonth: '2006/11', text: 'パチンコ『シンセー八億』田村店リニューアル開店(367台)' },
    { yearMonth: '2007/07', text: '１円パチンコ「イッパチ」営業開始' },
    { yearMonth: '2007/12', text: '５円スロット「ＧＯスロ」営業開始' },
    { yearMonth: '2008/08', text: 'パチンコ『シンセー八億』厚木店りニューアル開店(454台)' },
    { yearMonth: '2008/08', text: 'パチンコ『シンセー八億』平塚店リニューアル開店(446台)' },
    { yearMonth: '2008/08', text: 'パチンコ『シンセー八億』田村店リニューアル開店(403台)' },
    { yearMonth: '2008/09', text: '２円パチンコ「ニッパチ」営業開始' },
    { yearMonth: '2018/09', text: 'パチンコ『シンセー八億』田村店閉店' }
]

/* *******************************************************************
   求人情報の変更はこちら
******************************************************************* */
var recrit_object = {
    募集:       ['a. 準社員', 
                 'b. パート・アルバイト'],
    業務内容:   ['パチンコ店スタッフ'],
    資格:       ['18歳～30歳位迄'],
    勤務地:     ['シンセー八億厚木店・平塚店・南足柄店のいずれか'],
    勤務時間:   ['２交代制', 
                 ' ※ 早番：8:30～16:30 遅番：16:00～24:00）'],
    給与:       ['a. 準社員 基本時給：1,500円', 
                 '  -  深夜時給（22:00以降）：1,875円', 
                 'b. パート・アルバイト 基本時給：1,200円', 
                 '  -  深夜時給（22:00以降）：1,500円'],
    待遇:       [ '交通費支給', 
                  '各種社会保険制度有り',
                  '制服貸与'],
    寮設備:     [ 'ワンルーム寮',
                  ' ※ 約10畳／バス・ウォシュレット付トイレ・エアコン・BS内蔵28インチテレビ・冷蔵庫・寝具・駐車場付'],
    休日:       [ 'a. 準社員（6日／月・交替制', 
                  'b. パート・アルバイト（応相談・交替制）'],
    応募方法:   [ '勤務希望店に電話連絡の後、履歴書持参にてご来店ください。', 
                  '（当ホームページを見てきた事を告げて下さい。）'],
    連絡先:     [ '厚木店：TEL 046-245-3311 採用担当者',
                  '平塚店：TEL 0463-24-1177 採用担当者',
                  '南足柄店：TEL 0465-74-4141 採用担当者']
}

/* *******************************************************************
   経営理念・社訓の変更はこちら
******************************************************************* */
var motto_object = {
    以玉伝心:     [ 
                    'お客様本位の姿勢', 
                    'やりがいのある職場',
                    '地域社会への貢献' 
                  ],
    社訓:         [ 'パチンコ店スタッフ',
                    'お客様には親切に',
                    '笑顔でサービス',
                    '心をこめてありがとう'
                  ],
    八つの言葉:   [ 'いらっしゃいませ',
                    'おめでとうございます',
                    '失礼いたします',
                    '少しお待ちくださいませ',
                    'お待たせいたしました',
                    'ごゆっくりどうぞ',
                    'ありがとうございます',
                    'またお越し下さいませ'
                  ],
    三つの行動:   [ 
                    'はずかしがらない。',
                    'いやがらない。',
                    'やってみる。'
                  ]
}

/* *******************************************************************
   Vue App です。
******************************************************************* */
var app = new Vue({
    el: '#app',
    data: {
        companyName:   '株式会社 新清',
        company: company_object,
        
        seen_carousel: true,
        seen_news:     true,
        seen_company:  true,
        seen_motto:    true,
        seen_shop:     true,
        seen_recrit:   true,

        companyObject: company_object,
        recritObject:  recrit_object,
        mottoObject:   motto_object,
        historyItems:  history_items,
        imgItems:      img_items,
        storeItems:    store_items,
        newsItems:     news_items,

        // 
        atsugi1: store_objects.atsugi1,
        atsugi2: store_objects.atsugi2,
        hiratsuka: store_objects.hiratsuka,
        minamiashigara: store_objects.minamiashigara,
        // 店舗個別の表示・非表示 (true or false)
        seen_shop_atsugi1:     true,
        seen_shop_atsugi2:     true,
        seen_shop_hiratsuka:     true,
        seen_shop_minamiashigara:     true
    },
    methods: {
        homeBottan: function () {
            this.seen_company =  false;
            this.seen_recrit =  false;
            this.seen_motto = false;
            this.seen_carousel = true;
            this.seen_news = true;
            this.seen_shop = false;
        },
        companyBottan: function () {
            this.seen_company =  true;
            this.seen_recrit =  false;
            this.seen_motto = false;
            this.seen_carousel = false;
            this.seen_news = false;
            this.seen_shop = false;
        },
        mottoBottan: function () {
            this.seen_company =  false;
            this.seen_recrit =  false;
            this.seen_motto = true;
            this.seen_carousel = false;
            this.seen_news = false;
            this.seen_shop = false;
        },
        recritBottan: function () {
            this.seen_company =  false;
            this.seen_recrit =  true;
            this.seen_motto = false;
            this.seen_carousel = false;
            this.seen_news = false;
            this.seen_shop = false;
        },
        shopBottan: function () {
            this.seen_company =  false;
            this.seen_recrit =  false;
            this.seen_motto = false;
            this.seen_carousel = false;
            this.seen_news = false;
            this.seen_shop = true;
            this.seen_shop_atsugi1 = true;
            this.seen_shop_atsugi2 = true;
            this.seen_shop_hiratsuka = true;
            this.seen_shop_minamiashigara = true;
        }
    }
})

app.seen_carousel = false;