body {
    font-family: 'Roboto', sans-serif !important;
}
.accordion {
    background: #fff;
    margin: 5px;
    padding: 5px;
    border-radius: 8px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    direction: ltr;
    overflow: auto;
    border: 3px solid #fff;
}

.accordion .AccrCntnt {
    margin: 5px 0;
    border-radius: 4px;
    background: #eee;
    border: 2px solid #ccc;
    overflow: hidden;
}

.AccrCntnt .headr {
    display: flex;
    padding: 5px;
    align-items: center;
    justify-content: space-between;
    transition: all 0.2s;
}

.chUnt {
    color: #000;
    font-size: 17px;
    line-height: 25px;
    display: inline-flex;
    width: 100%;
}

.chkall {
    padding: 10px;
    color: #000;
    font-size: 17px;
    line-height: 22px;
}

.chkall div {
    padding: 3px;
    margin: 5px 2px;
    border-radius: 5px;
    background-color: #ccc;
    display: flex;
    width: 100%;
}

.AccrCntnt .headr button,
.chkall button {
    background-color: #fff;
    color: #000;
    border: none;
    padding: 1px;
    border-radius: 3px;
    height: 20px;
    margin: auto;
    margin-right: 1px;
    font-size: 12px;
    width: 30px;
    max-width: 150px;
}

.AccrCntnt .description {
    font-size: 12px;
    color: #333;
    font-weight: 400;
    padding: 0;
    margin-top: 0;
}

.description .chkall {
    width: 96%;
    margin: 4px auto;
}

.description input {
    min-width: 18px;
    min-height: 18px;
    border-radius: 5px;
}

.chUnt input {
    min-width: 20px;
    min-height: 20px;
    margin-right: 5px;
    border-radius: 5px;
}

.chkall label,
.chUnt label {
    padding: 3px 2px;
}

.attempt-questions {
    padding: 5px 0;
    border-radius: 5px;
}

.MainAttemptGuide {
    background-color: #eee;
    margin: 3px auto;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
}

.ShowStord,
.DelStord {
    cursor: pointer;
    width: 20%;
    min-width: 50px;
    padding: 10px 5px;
    color: #fff;
    font-size: 17px;
    background-color: #04b431;
}

.DelStord {
    background-color: red;
    width: 70px;
    min-width: 40px;
}

.scorStord {
    padding: 5px 1px;
    width: 45%;
    background-color: #ccc;
}

.NamDate {
    padding: 5px 1px;
    width: 95%;
    background-color: #ccc;
}

.ShowStord,
.DelStord,
.scorStord,
.NamDate {
    border: none;
    outline: none;
    margin: 3px 1px;
    border-radius: 2px;
}

.scorStord,
.NamDate {
    line-height: 20px;
    font-size: 15px;
}

.questionElementCls {
    background-color: #eee;
    border: 2px solid #ddd;
    margin-bottom: 10px;
    padding: 5px 1px;
    border-radius: 3px;
    font-size: 18px;
    line-height: 25px;
    background-image: linear-gradient(to bottom, #f6f6f6, #ddd, #ccc, #d4d4d4);
}

.QuesStored {
    padding: 5px;
    border-radius: 2px;
}

.choicesQ {
    padding: 5px;
    margin: 0;
    border-radius: 2px;
    border: 2px solid #a4a4a4;
}

.correctANS,
.yourNoteCls,
.yourAnsCls {
    padding: 3px;
}

#infoNew02 {
    border-radius: 3px;
    text-align: center;
    padding-bottom: 5px;
    display: none;
    direction: ltr;
}

.endBtns02 {
    background-color: #ddd;
    margin: 2px;
    padding: 15px 5px;
    border-radius: 5px;
    width: 30%;
    outline: none;
    border: 2px solid #0a0a2a;
    line-height: 20px;
}

#ttlEndd2 {
    background-color: #0a0a2a;
    text-align: center;
    padding: 10px 2px;
    margin-bottom: 5px;
}

#tryBtn02,
#QueEnd02,
#mnuBtn02 {
    font-size: 25px;
    padding: 7px 3px;
    background-color: #0a0a2a;
    color: #fff;
    border: none;
}

#tryBtn02 {
    float: left;
    padding: 0 2px;
    margin-top: 10px;
    margin-left: 2px;
    color: #fff;
}

#mnuBtn02 {
    float: right;
    margin-right: 2px;
    padding: 5px 5px;
    font-size: 35px;
}

#QueEnd03 {
    background-color: #ddd;
    border-radius: 1px;
    padding: 5px;
    text-align: center;
    border: none;
    outline: none;
    font-size: 18px;
}

#MainRevFLD {
    margin: 10px 0;
    margin-bottom: 0;
    direction: ltr;
}

#RevTab02 {
    width: 100%;
    overflow: hidden;
    margin: 0;
    display: flex;
}

.RevBtn02 {
    background-color: #ccc;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 20px 0px;
    transition: 0.3s;
    font-size: 17px;
    width: 100%;
    margin: 0 1px;
    color: #000;
    text-align: center;
}

#noQuCor02,
#noQuWrng02,
#noQuSkp02 {
    padding: 30px 5px;
    background-color: #eee;
    text-align: center;
    border-radius: 5px;
    margin: 5px;
}

.RevBtn02.active {
    background-color: #01df3a;
    color: #000;
}

.RevCntnt02 {
    display: none;
    margin: 0;
    padding: 0;
    width: 100%;
    -webkit-animation: fadeEffect 1s;
    animation: fadeEffect 1s;
    text-align: left;
}

@-webkit-keyframes fadeEffect {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeEffect {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

#FldRvCorID,
#FldRvWrngID,
#FldRvFlgID {
    background-color: #eee;
    padding: 5px;
    margin: 10px 1px;
    border-radius: 3px;
    font-size: 17px;
}

.classRev1,
.classRev2,
.classRev3 {
    background-color: #fff;
    border: 1px solid #777;
    outline: none;
    padding: 10px 15px;
    border-radius: 2px;
    margin: 5px 2px;
    cursor: pointer;
}

.opCor,
.opWrng,
.opFlag {
    border: 2px solid #ccc;
    padding: 7px 5px;
    border-radius: 2px;
    margin: 3px 1px;
    cursor: pointer;
}

#QuRV1,
#QuRV2,
#QuRV3 {
    background-color: #f5f7f8;
    padding: 15px 5px;
    border-radius: 2px;
    margin: 7px 2px;
    max-height: 600px;
    overflow: auto;
}

#QuRVExplnCor,
#QuRVExplnwrng,
#QuRVExplnFlag {
    background-color: #ddd;
    border-radius: 3px;
    padding: 5px;
    margin: 5px;
    max-height: 600px;
    overflow: auto;
}

.activBtn1,
.activBtn2,
.activBtn3 {
    background-color: #18457C;
}

#ShowRV1,
#ShowRV2,
#ShowRV3 {
    background-color: #2e9afe;
    padding: 15px 20px;
    margin: 10px auto;
    border-radius: 3px;
    border: none;
    outline: none;
    font-size: 17px;
}

#dleel1,
#dleel2,
#dleel3 {
    display: none;
}

#Qcor00,
#Qwrng00,
#QFlag00 {
    overflow-x: auto;
    background-color: #a9d0f5;
    padding: 5px;
    white-space: nowrap;
}

#mainQUIZ {
    display: none;
}

.newBtnsCls {
    background-color: #8cc63f;
    border-radius: 5px;
    padding: 5px 1px;
    width: 60px;
    display: block;
    margin: 5px 0;
    transition: all 0.3s;
    border: none;
    font-size: 18px;
    color: #fff;
}

.active2 {
    background-color: green;
    border-radius: 5px;
    padding: 5px 2px;
    color: #fff;
}

.active2::after {
    content: ">";
    color: #fff;
    margin: 0 -10px 0 5px;
    padding: 0;
    font-size: 20px;
    font-weight: bold;
    pointer-events: none;
}

.main-wrapper {
    font-family: 'Roboto', sans-serif;
    width: 100%;
    display: flex;
    direction: ltr;
}

.quiz-container {
    max-height: 600px;
    overflow: auto;
}

.QueDlel {
    padding: 10px;
    margin: 3px 0;
    color: #000;
    font-weight: bold;
    font-size: 18px;
    background-color: #f2f2f2;
    border-left: 3px solid #18457C;
    box-shadow: 0px 10px 10px -10px #111;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.toolbar-icons {
    display: flex;
    align-items: center;
}
#QuID2 {
    margin: 0;
    font-family: fantasy;
    font-size: 22px;
    margin-left: 2px;
    color: #18457C;
}
.headr{
    font-family: 'Roboto', sans-serif;}
.QueDlel {
    color: #18457C;
}

.QueDlel button {
    margin: 0;
    padding: 1px;
    font-size: 13px;
    color: #000;
    pointer-events: none;
}

#Que {
    background-color: #f5f7f8;
    padding: 5px;
    border-radius: 5px;
    margin: 5px;
    font-size: 18px;
    line-height: 25px;
}

.answrs {
    width: 100%;
    height: 100%;
    z-index: 1;
    position: absolute;
}

.eachAnswer label {
    padding: 7px 0;
    display: inline-flex;
    align-items: center;
    border: 1px solid #fff;
    position: relative;
    z-index: 0;
    transition: all 0.3s ease;
    margin: 0 5px;
    width: calc(100% - 10px);
}

.eachAnswer input:checked~span {
    border: 3px solid #ecb424;
    background: #f4d474;
    z-index: -1;
}

.eachAnswer span {
    width: calc(100% + 10px);
    right: 5px;
    left: -5px;
    height: 100%;
    position: absolute;
    transition: all 0.1s ease;
    border: 3px solid #3d4347;
}

.eachAnswer input[type="radio"] {
    opacity: 0;
}

.eachAnswer {
    text-align: left;
    direction: ltr;
    margin: 8px;
    font-size: 18px;
    line-height: 25px;
}

.eachAnswer input:hover~span {
    border: 3px solid #ecb424;
}

.ExplnAns {
    font-weight: bold;
    color: green;
}

table {
    direction: ltr;
    max-width: 99%;
    border: 1px solid #000;
}

table td {
    padding: 5px;
    border-radius: 2px;
    border: 1px solid #000;
}

table th {
    border-radius: 2px;
    border: 1px solid #000;
    color: #000;
    background-color: #ccc;
    padding: 5px;
}

.TblScrl {
    max-width: 99%;
    overflow: auto;
}

::-webkit-scrollbar {
    height: 3px;
    background: #eee;
    width: 3px;
}

::-webkit-scrollbar-thumb {
    height: 3px;
    background: #ccc;
    width: 3px;
}

.scrlBTNs {
    background-color: #4cc63f;
    border-radius: 5px;
    padding: 2px;
    width: 61px;
    height: 30px;
    margin: auto;
    border: none;
    outline: none;
    cursor: pointer;
}

.scrlBTNs i {
    color: #fff;
    font-size: 20px;
}

#lstBtns {
    border-radius: 5px;
    display: inline-block;
    text-align: center;
    padding: 0 5px;
    margin: 3px 0;
    max-height: 500px;
    overflow: auto;
}

#main3 {
    background-color: #4d4c4d;
    padding: 5px;
    direction: rtl;
    text-align: center;
    display: flex;
}

#main3 div {
    display: flex;
    width: 100%;
    direction: ltr;
}

#main3 div button {
    width: 100%;
    background-color: #8cc63f;
    padding: 5px;
    color: #fff;
    height: 60px;
    font-size: 19px;
    border-radius: 5px;
    font-weight: bold;
    margin: 2px 3px;
    border: none;
    outline: none;
    cursor: pointer;
}

#main3 button:hover {
    opacity: 0.7;
}

#main3 button:active {
    box-shadow: 0 0 8px 8px #48d1cc;
    transition: all 0.1s ease;
}

#notifMSG,
#notifSaved {
    background-color: #8cc63f;
    padding: 0 1px;
    border-radius: 3px;
    text-align: center;
    width: 90%;
    max-width: 400px;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    margin: 0.5px auto;
    line-height: 50px;
    height: 50px;
    max-height: 0px;
    overflow: hidden;
    transition: all 0.5s ease;
}

#explainID1 {
    background-color: #eee;
    border: 2px solid #ccc;
    padding: 10px 5px;
    max-height: 600px;
    overflow: auto;
    direction: ltr;
    line-height: 25px;
    font-size: 18px;
}

#NootesDivMain {
    margin: 5px 0;
    padding: 10px 5px;
    background-color: #ccc;
    border-radius: 3px;
}

.clasNotDB {
    width: 99%;
    max-width: 1000px;
    height: 200px;
    overflow: auto;
    direction: ltr;
    resize: none;
    padding: 10px;
    font-size: 17px;
    line-height: 21px;
    border-radius: 5px;
    margin: auto;
}

#rightLeft {
    border: none;
    outline: none;
    cursor: pointer;
    padding: 10px 15px;
    border-radius: 2px;
    background-color: #002d62;
    font-size: 16px;
    color: #fff;
    margin-top: 5px;
}

#rightLeft:active {
    box-shadow: 0 0 8px 8px #007791;
    transition: all 0.1s ease;
}

#BtnSide {
    padding: 5px;
    border-radius: 2px;
    font-size: 25px;
    color: #fff;
    display: none;
    position: absolute;
    left: 1px;
}

#NoteArea {
    max-width: 400px;
    background-color: #ccc;
    padding: 10px;
}

#calcbody {
    direction: rtl;
    background-color: #ccc;
    padding: 10px;
    max-width: 400px;
}

#NoteArea,
#calcbody {
    box-shadow: 0 0 8px 8px #777;
    width: calc(100% - 17px);
    z-index: 1;
    position: absolute;
    margin-right: 8px;
}

.conatainer {
    background-color: #222222;
    border-radius: 4px;
    direction: ltr;
    padding: 5px;
}

#screen {
    width: 100%;
    height: 60px;
    outline: none;
    border-radius: 10px;
    font-size: 28px;
    color: #000;
    text-align: right;
    background-color: #fff;
    overflow: hidden;
    border: 2px solid #ccc;
    margin: 4px 0;
    padding: 0 10px;
}

.calc {
    display: flex;
}

.calc button {
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 20px;
    width: 100%;
    text-align: center;
    height: 50px;
    border-radius: 10px;
    font-weight: bold;
    margin: 2px;
}

.reset.clr {
    background-color: green;
    color: #fff;
}

.reset.del {
    background-color: red;
    color: #fff;
}

.reset.equal {
    background-color: #0984e3;
    color: #fff;
}

#frm {
    margin: 2px 0 5px 0;
}

#not {
    width: 100%;
    height: 300px;
    overflow: auto;
    direction: rtl;
    resize: none;
    padding: 10px;
    line-height: 160%;
    border-radius: 5px;
    font-size: 17px;
    margin-bottom: 0;
}

#flxnotbtns {
    display: flex;
    margin: 0;
    direction: ltr;
}

#right,
#left,
#Clear {
    padding: 10px 2px;
    margin: 3px;
    width: 100%;
    border-radius: 5px;
    border: none;
    background-color: green;
    color: #fff;
    font-size: 17px;
    z-index: 2;
}

#Clear {
    transition: 0.3s ease;
    background-color: red;
}

.calc button,
#flxnotbtns button {
    box-shadow: 0 3px #a8a8a8;
}

.calc button:active,
#flxnotbtns button:active {
    box-shadow: 0 1px #a8a8a8;
    transform: translateY(2px);
}

.ClearActv {
    max-width: 0%;
    opacity: 0;
    padding: 0;
    z-index: 999;
}

#dropbtnStng {
    background-color: #3498db;
    color: #fff;
    padding: auto;
    font-size: 15px;
    border: none;
    width: 30px;
    height: 30px;
    margin-top: 5px;
    z-index: 99999999;
}

#DropId {
    position: absolute;
    padding: 5px;
    margin: 5px 0 0 0;
    text-align: center;
    box-shadow: 0 0 8px 6px #777;
    right: 15px;
    direction: ltr;
    background-color: #e6e0f8;
    border-radius: 3px;
    z-index: 1;
}

#contnrSting div {
    display: flex;
    justify-content: space-between;
    border: 2px solid #ccc;
    margin: 3px 1px;
}

#contnrSting div button {
    border-radius: 50%;
    margin: 1px;
    height: 45px;
    width: 45px;
    border: 2px solid #fff;
    font-weight: bold;
}

.stngCls {
    box-shadow: 0 0 8px 3px #ff0040;
    transition: all 0.1s ease;
    background-color: #ff0000;
    color: #000;
}

#contnrSting div label {
    padding: 10px 5px;
}

.OnOffCls {
    box-shadow: 0 0 8px 3px #2efe2e;
    transition: all 0.1s ease;
    background-color: #04b404;
    color: #000;
}

#main1 {
    background-color: #4d4c4d;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    height: 60px;
    direction: ltr;
    align-items: center;
}

#main1 button {
    background-color: #fff8dc;
    border-radius: 5px;
    border: none;
    outline: none;
    height: 40px;
    padding: 1px 40px;
    margin-right: 5px;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;
}

#main1 button:hover {
    opacity: 0.6;
}

#main1 .bar1 {
    padding: 1px 20px;
}

#main1 .bar1:nth-child(1) {
    position: absolute;
    left: 5px;
    line-height: 20px;
    color: #fff;
}

#main1 .bar1:nth-child(2) {
    color: #fff;
    text-align: center;
    line-height: 23px;
    display: flex;
}

#main1 .bar1:nth-child(3) {
    padding: 1px 30px;
    line-height: 15px;
}
#lblPrg {
    color: #fff;
    font-size: 15px;
}

}

#main2 {
    background-color: #8cc63f;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-size: 18px;
    margin-bottom: 5px;
    direction: ltr;
}

#DivIcon {
    margin: 1px 10px;
}

#ClocIcon {
    position: relative;
    margin-top: -5px;
    font-size: 48px;
    color: #fff;
    cursor: pointer;
}

.see-also {
    display: none;
}

.dropbtn {
    background-color: #3498db;
    color: #fff;
    padding: auto;
    font-size: 25px;
    border: none;
    width: 70px;
    z-index: 1;
    height: 50px;
    left: 0;
}

#dropbtnSide {
    background-color: #ccc;
    width: 100%;
    height: 50px;
    font-size: 20px;
    border: none;
    outline: none;
    padding: 0;
    background-image: linear-gradient(to right,
            #0b4c5f,
            #0174df,
            #18457C,
            #0b615e);
}

.dropbtn:hover {
    background-color: #2980b9;
}

.dropdown {
    position: relative;
}

.dropdown-content {
    display: none;
    position: absolute;
    width: calc(100% - 12px);
    max-width: 600px;
    padding: 2px;
    margin: 0;
    margin-left: 6px;
    text-align: center;
    z-index: 1;
    box-shadow: 0 0 8px 6px #777;
    left: 0;
    direction: ltr;
    background-color: #e6e0f8;
    border-radius: 3px;
}

#dropdownID {
    display: none;
    direction: ltr;
    line-height: 23px;
    font-size: 18px;
}

#notAttYet {
    font-size: 17px;
    color: #000;
    padding: 30px 2px;
    border-radius: 3px;
}

#attempts {
    max-height: 400px;
    overflow: auto;
}

#search-inputAtt {
    padding: 10px;
    border-radius: 5px;
    font-size: 17px;
    text-align: center;
    margin: 5px auto;
    width: 90%;
    max-width: 500px;
}

#NoMarkQ2,
#notAttYet2 {
    font-size: 17px;
    padding: 100px 2px;
    text-align: center;
    background-color: #ccc;
}

#MarkedInput {
    width: 90%;
    margin: 5px auto;
    padding: 10px 2px;
    border-radius: 5px;
    text-align: center;
}

#marked-questions-container {
    padding: 5px 1px;
    border-radius: 3px;
    max-height: 400px;
    overflow: auto;
}

#marked-question-container {
    background-color: #eee;
    border: 2px solid #ddd;
    padding: 5px 1px;
    border-radius: 3px;
    font-size: 18px;
    line-height: 25px;
    background-image: linear-gradient(to bottom, #f1f1f1, #ddd, #ccc);
}

.MrkdQuText {
    padding: 5px;
    border-radius: 2px;
}

.MrkdQuChoics {
    padding: 5px;
    border-radius: 2px;
    border: 2px solid #a4a4a4;
}

.MrkdQuAnswrs {
    padding: 3px;
}

#markedSearchDiv {
    text-align: center;
    background-color: #e6e0f8;
    padding: 5px;
    margin: 0;
    position: absolute;
    box-shadow: 0 0 8px 8px #777;
    border-radius: 3px;
    margin-top: 5px;
    width: 150px;
    margin-left: 9px;
    display: none;
}

.markedQuestionShow {
    border: none;
    outline: none;
    height: 100%;
    width: calc(70% - 4px);
    border-radius: 2px;
    background-color: #01a9db;
}

.deleteMarkBtn {
    background-color: red;
    height: 100%;
    width: 30%;
    border: none;
    font-size: 18px;
    outline: none;
    border-radius: 2px;
    color: #fff;
    margin-left: 2px;
}

.markedQuestionShow.active {
    background-color: #0b3861;
    color: white;
}

#MnuMarked {
    background-color: #007791;
    color: #fff;
    padding: auto;
    font-size: 25px;
    border: none;
    width: 70px;
    z-index: 1;
    height: 50px;
    left: 0;
}

#MnuMarked:hover {
    background-color: #2980b9;
}

#QnumSvd {
    background-color: #ccc;
    width: 100%;
    height: 50px;
    font-size: 20px;
    border: none;
    outline: none;
    padding: 0;
    background-image: linear-gradient(to right,
            #01a9db,
            #013adf,
            #0174df,
            #0489b1,
            #01a9db);
}

#topMunSvdQ {
    display: flex;
    width: 100%;
}

#MarkedQuID {
    direction: ltr;
    display: none;
}

.ShowDelMrkdCls {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 45px;
    margin: 2px 0;
    text-align: center;
}

#NxtPrvID {
    display: flex;
    justify-content: space-between;
    direction: ltr;
    padding: 5px;
    border-radius: 1px;
    background-image: linear-gradient(to right, #0174df, #0489b1, #01a9db);
}

.NxtPrvIDbTN {
    background-color: #8cc63f;
    padding: 20px 5px;
    width: 150px;
    color: #fff;
    font-size: 19px;
    border-radius: 2px;
    font-weight: bold;
    margin: 2px 0;
    border: none;
    outline: none;
    background-image: linear-gradient(0deg, rgb(82, 82, 82), rgb(99, 99, 99)),
        linear-gradient(45deg,
            rgb(12, 3, 124) 0%,
            rgb(12, 3, 124) 63%,
            rgb(16, 35, 140) 63%,
            rgb(16, 35, 140) 68%,
            rgb(19, 67, 156) 68%,
            rgb(19, 67, 156) 77%,
            rgb(23, 100, 171) 77%,
            rgb(23, 100, 171) 86%,
            rgb(26, 132, 187) 86%,
            rgb(26, 132, 187) 92%,
            rgb(30, 164, 203) 92%,
            rgb(30, 164, 203) 100%),
        linear-gradient(135deg,
            rgb(12, 3, 124) 0%,
            rgb(12, 3, 124) 63%,
            rgb(16, 35, 140) 63%,
            rgb(16, 35, 140) 68%,
            rgb(19, 67, 156) 68%,
            rgb(19, 67, 156) 77%,
            rgb(23, 100, 171) 77%,
            rgb(23, 100, 171) 86%,
            rgb(26, 132, 187) 86%,
            rgb(26, 132, 187) 92%,
            rgb(30, 164, 203) 92%,
            rgb(30, 164, 203) 100%);
    background-blend-mode: overlay, overlay, normal;
}

.NxtPrvIDbTN:hover {
    opacity: 0.7;
}

.NxtPrvIDbTN:active {
    box-shadow: 0 0 8px 8px #0000ff;
    transition: all 0.1s ease;
}

#crntQueMarkd {
    border: none;
    outline: none;
    padding: 15px 1px;
    color: #000;
    font-size: 19px;
    font-weight: bold;
    background-color: transparent !important;
}

#frstBtnsCls {
    text-align: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: auto;
    direction: ltr;
}

#frstBtnsQuz,
#frstBtnsAtm,
#MarkedQuBtn {
    border: none;
    outline: none;
    padding: 5px;
    height: 70px;
    line-height: 20px;
    border-radius: 2px;
    margin: 10px 1px;
    width: 100%;
    font-size: 17px;
    cursor: pointer;
    background-color: #ccc;
}
#StngId , #calcbtn , #NotIcon {
    cursor: pointer;
    margin: auto 10px;
    width: 33px;
    height: 33px;
}
.actvBTN {
    color: #fff;
    background-image: linear-gradient(to right,
            #01a9db,
            #0174df,
            #0489b1,
            #01a9db);
}

.NewQrev {
    margin: 3px 1px 10px 1px;
    background-color: #ddd;
    padding: 5px 0;
    border-radius: 5px;
    line-height: 20px;
}

.newQ {
    border-radius: 2px;
    padding: 10px 3px;
    margin: 10px 5px;
    border: 2px solid #ccc;
    overflow: auto;
}

.NewQrev .OPcls {
    border-radius: 3px;
    background-color: #eee;
    padding: 10px;
    margin: 5px 3px;
    cursor: pointer;
}

.NewSHowBtn {
    border-radius: 3px;
    background-color: #1927ba;
    padding: 15px 10px;
    color: #fff;
    text-align: center;
    width: 200px;
    max-width: 90%;
    margin: 10px auto 5px auto;
    cursor: pointer;
}

.newEXP {
    border-radius: 2px;
    background-color: #eee;
    padding: 5px;
    margin: 5px;
    border: 2px solid #ccc;
}

#idquizover {
    width: 100%;
    max-width: 100%;
    z-index: 11;
    display: none;
    margin: 0;
    border-radius: 3px;
    padding: 3px 0px;
    direction: ltr;
    background-color: #fff;
}

.overDvs {
    display: none;
}

@media screen and (min-width: 699px) {

    ::-webkit-scrollbar,
    ::-webkit-scrollbar-thumb {
        width: 7px;
    }

    .endBtns {
        padding: 30px 15px;
        font-size: 18px;
        border: 3px solid #0a0a2a;
    }

    .NewQrev {
        font-size: 18px;
        line-height: 25px;
    }

    #noQuCor,
    #noQuWrng,
    #noQuSkp {
        font-size: 20px;
    }

    #tryBtn,
    #QueEnd0,
    #mnuBtn,
    #QueEnd {
        font-size: 18px;
    }
}

#MainRev {
    margin: 10px 0;
}

#RevTab {
    width: 100%;
    overflow: hidden;
    margin: 0;
    display: flex;
}

.RevBtn {
    background-color: #ccc;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 20px 0px;
    transition: 0.3s;
    font-size: 17px;
    width: 100%;
    margin: 0 1px;
    color: #000;
    text-align: center;
}

#noQuCor,
#noQuWrng,
#noQuSkp {
    padding: 30px 5px;
    background-color: #eee;
    text-align: center;
    border-radius: 5px;
    margin: 5px;
}

.RevBtn:hover {}

.RevBtn.active {
    background-color: #01df3a;
    color: #000;
}

.RevCntnt {
    display: none;
    margin: 0;
    padding: 0;
    width: 100%;
    -webkit-animation: fadeEffect 1s;
    animation: fadeEffect 1s;
}

@-webkit-keyframes fadeEffect {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeEffect {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

#infoNew {
    background-color: #eee;
    border-radius: 3px;
    text-align: center;
    padding-bottom: 5px;
}

.endBtns {
    background-color: #ddd;
    margin: 2px;
    padding: 15px;
    border-radius: 5px;
    width: 30%;
    outline: none;
    border: 2px solid #0a0a2a;
    line-height: 20px;
}

#ttlEndd {
    background-color: #0a0a2a;
    text-align: center;
    padding: 10px 2px;
    margin-bottom: 5px;
}

#tryBtn,
#QueEnd0,
#mnuBtn {
    font-size: 15px;
    padding: 7px 3px;
    background-color: #0a0a2a;
    color: #fff;
    border: none;
}

#tryBtn {
    float: left;
    cursor: pointer;
    background-color: #ddd;
    border-radius: 4px;
    margin-left: 2px;
    color: #000;
}

#mnuBtn {
    float: right;
    cursor: pointer;
    background-color: #ddd;
    border-radius: 4px;
    margin-right: 2px;
    color: #000;
}

#QueEnd {
    background-color: #ddd;
    border-radius: 3px;
    padding: 5px;
    text-align: center;
    border: none;
    outline: none;
    font-size: 15px;
}

iframe {
    height: 240px;
}

.see-also {
    display: none
}

@media screen and (min-width: 699px) {

    ::-webkit-scrollbar,
    ::-webkit-scrollbar-thumb {
        width: 6px;
        height: 7px;
    }

    .endBtns02 {
        padding: 30px 15px;
        font-size: 18px;
        border: 3px solid #0A0A2A;
    }

    .QrevCls {
        font-size: 18px;
        line-height: 25px
    }

    #noQuCor02,
    #noQuWrng02,
    #noQuSkp02 {
        font-size: 20px;
    }

    .accordion .AccrCntnt label,
    .AccrCntnt header i {
        cursor: pointer;
    }

    #RandChoiceID label {
        cursor: pointer;
    }

    .description input,
    .chUnt input {
        cursor: pointer;
    }

    #RandChoiceID label,
    #RandChoiceID input {
        cursor: pointer;
    }

    .newBtnsCls {
        cursor: pointer;
    }

    #right,
    #left,
    #Clear {
        cursor: pointer;
    }

    .QueDlel i {
        cursor: pointer;
    }

    #ShowRV1,
    #ShowRV2,
    #ShowRV3 {
        cursor: pointer;
    }

    #tryBtn02,
    #mnuBtn02 {
        cursor: pointer;
    }

    .answrs,
    .eachAnswer label {
        cursor: pointer;
    }

    .markedQuestionShow,
    .deleteMarkBtn {
        cursor: pointer;
    }

    .NxtPrvIDbTN {
        cursor: pointer;
    }

    #MnuMarked,
    .dropbtn {
        cursor: pointer;
    }

    .AccrCntnt .headr i {
        cursor: pointer;
    }

    .stngCls,
    #StngId {
        cursor: pointer;
    }


}


/* for phone */
@media screen and (max-width: 699px) {
    #Qmark {
        font-size: 50px;
        color: #2b9ed8;
        margin-top: 10px;
    }

    #confrm {
        padding: 8px 15px;
    }

    .alertMSG center {
        color: #000;
        font-weight: normal;
        font-size: 17px;
        margin: 5px 10;
    }

    .alertMSG button {
        font-size: 17px;
        margin: 5px 1px 10px 1px;
        padding: 10px 20px;
    }

    #main2 div {
        font-size: 15px;
    }

    /* #main2 {padding-left: 20px;} */
    #simul {
        margin-left: 35px;
    }

    #BtnSide {
        font-size: 27px;
        left: 1px;
        display: block;
        margin-top: -3px
    }

    #QuList {
        display: none;
    }

    #main1 {
        justify-content: space-between;
    }

    #main1 .bar1:nth-child(1) {
        display: none
    }

    #main1 button {
        width: 30%;
        padding: 10px 10px;
        font-size: 15px;
        font-weight: normal;
    }

    #main1 .bar1 {
        padding: 1px 5px;
        position: relative;
    }

    #main1 .bar1:nth-child(3) {
        padding: 1px 5px;
        line-height: 10px;
        width: 33%;
    }

    #lblPrg {
        color: #fff;
        font-size: 13px;
    }

    #file {
        height: 30px;
        margin-top: -5px;
        width: 100%;
    }

    #main1 .bar1:nth-child(2) {
        width: 30%;
        direction: ltr;
        text-align: left;
        margin-left: -5px;
    }

    #DivIcon {
        cursor: pointer;
        line-height: 50px
    }

    #ClocIcon {
        margin-top: -5px;
        font-size: 45px;
        color: #fff;
        position: absolute;
        left: 5px;
    }

    #TimRem {
        display: none;
    }

    #TimRem2 {
        margin-left: 25px;
        line-height: 35px;
    }

    #Que,
    .eachAnswer {
        line-height: 18px;
    }

    #main3 {
        display: block;
    }

    #main3 div button {
        height: 50px;
        font-size: 17px;
    }

    #Que,
    .eachAnswer {
        font-size: 17px;
        line-height: 23px;
    }

    .QueDlel {
        font-size: 15px;
        padding: 10px 5px;
    }

    .QueDlel i {
        margin: 1px 5px;
        font-size: 30px;
    }

    .chUnt {
        font-size: 15px;
        margin: 0;
        line-height: 18px;
    }

    .chkall {
        padding: 5px 2px;
        font-size: 14px;
        margin: 0 3px;
        line-height: 16px;
        width: 100%;
    }

    .chkall div {
        padding: 3px;
        margin: 5px 0;
        width: calc(100% - 5px);
    }

    #explainID1 {
        line-height: 22px;
        font-size: 17px;
    }

    #Pag3 .TitlSide {
        font-size: 12px;
    }

    #QueEnd02,
    #QueEnd03 {
        font-size: 14px;
    }

    #mnuBtn02 {
        font-size: 25px;
    }

    #tryBtn02 {
        margin-top: 4px;
    }

    #FldRvCorID,
    #FldRvWrngID,
    #FldRvFlgID {
        font-size: 16px;
        line-height: 20px
    }

    #dropbtnSide,
    #QnumSvd {
        font-size: 17px
    }

    #dropdownID {
        line-height: 20px;
        font-size: 17px;
    }

    .scorStord,
    .NamDate {
        line-height: 17px;
        font-size: 13px;
    }

    #marked-question-container,
    .questionElementCls {
        font-size: 17px;
        line-height: 20px
    }

    .NxtPrvIDbTN {
        width: 100px;
        font-size: 17px;
    }

    #crntQueMarkd {
        font-size: 17px;
    }

}

.AlertMsgCls {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.6);
    padding-top: 25vh;
}

.alertMSG {
    position: relative;
    background-color: #fff;
    margin: auto;
    width: 85%;
    max-width: 500px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s
}

@-webkit-keyframes animatetop {
    from {
        top: -300px;
        opacity: 0
    }

    to {
        top: 0;
        opacity: 1
    }
}

@keyframes animatetop {
    from {
        top: -300px;
        opacity: 0
    }

    to {
        top: 0;
        opacity: 1
    }
}

#Qmark {
    font-size: 70px;
    color: #2b9ed8;
    margin-top: 20px;
}

#confrm {
    background-color: #4d4c4d;
    text-align: left;
    padding: 13px 20px;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    border-radius: 3px 3px 0 0;
}

.alertMSG center {
    color: #000;
    font-weight: bold;
    font-size: 20px;
    margin: 10px;
    direction: ltr;
}

.alertMSG button {
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    margin: 5px 15px 25px 15px;
    padding: 15px 40px;
    border-radius: 5px;
    background-color: #8cc63f;
    border: none;
    outline: none;
    cursor: pointer;
}

.alertMSG button:active {
    box-shadow: 0 0 8px 8px #48d1cc;
    transition: all 0.3s ease;
}

/* .loader {
    border: 10px solid #f3f3f3;
    border-radius: 50%;
    border-top: 30px solid #18457C;
    border-right: 30px solid green;
    border-bottom: 30px solid red;
    border-left: 30px solid pink;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
} */
.load-wrapp {
    position: absolute;
    top: 50%;
    transform: translate(-50% , -50%);
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.load-1 .line:nth-last-child(1) {
    animation: loadingA 1.5s 1s infinite;
  }
  .load-1 .line:nth-last-child(2) {
    animation: loadingA 1.5s 0.5s infinite;
  }
  .load-1 .line:nth-last-child(3) {
    animation: loadingA 1.5s 0s infinite;
  }
  .l-1 {
    animation-delay: 0.48s;
  }
  .line {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background-color: #4b9cdb;
  }
  
  @keyframes loadingA {
    0 {
      height: 15px;
    }
    50% {
      height: 35px;
    }
    100% {
      height: 15px;
    }
  }
      
@-webkit-keyframes fadeEffect {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeEffect {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

#Pag1 {
    position: absolute;
    top: 50%;
    transform: translate(-50% , -50%);
    left: 50%;
    width: 99%;
    max-width: 500px;
    max-height: 700px;
    margin: auto;
    border-radius: 10px;
    transition: .3s ease;
    background-color: #ddd;
    box-shadow: 2px 1px 10px blue;
    transition: .5s ease;
    overflow: hidden;
}

#nxt1BtnID {
    opacity: 0.5;
    pointer-events: none;
}

.ClsU1,#chU1{
    display: none;
}

#Pag2,
#Pag3 {
    width: 99%;
    max-width: 400px;
    max-height: 0px;
    margin: auto;
    border-radius: 10px;
    transition: .5s ease;
    background-color: #ddd;
    box-shadow: 2px 1px 10px blue;
    overflow: hidden;
    opacity: 0;
    text-align: center;
}

.pages {
    direction: ltr;
}

@-webkit-keyframes fadeEffect {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeEffect {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.botmBTNS {
    justify-content: space-between;
    text-align: center;
    display: flex;
}

.backtopcs {
    padding: 16px 2px;
    width: 50%;
    background-color: #0174DF;
    text-align: center;
    cursor: pointer;
    color: #fff;
    font-size: 17px;
    font-weight: bold;
    border-radius: 2px;
    margin: 10px 5px;
    border: none;
    outline: none
}

.backtopcs:active {
    box-shadow: 0 0 8px 8px #48d1cc;
    transition: all 0.3s ease;
    background-color: #2E9AFE;
}

.TitlSide {
    width: 100%;
    border-radius: 3px;
    background-color: #fff;
    color: #000;
    padding: 15px 5px;
    border: none;
    outline: none;
}

#qnmV,
#timV {
    width: 30%;
    padding: 10px 2px;
    margin: auto;
    border-radius: 5px;
    text-align: center;
}

.MaxAndMum {
    border-radius: 3px;
    padding: 8px 3px;
    margin: 5px;
    display: flex;
}

.MaxAndMum button {
    width: 70%;
    border: none;
    outline: none;
    margin-right: 5px;
}

#RandChoiceID {
    display: block;
    text-align: left;
    direction: ltr;
    padding: 15px;
}

#RandChoiceID div {
    border-radius: 3px;
    padding: 5px 5px;
    margin: 5px;
    font-size: 17px;
    text-align: left;
}

#RandChoiceID input:checked~label {
    font-size: 19px;
    font-weight: bold;
    transition: 0.3s;
}

#RandChoiceID label {
    padding: 5px;
}

.MaxAndMum input::-webkit-outer-spin-button,
.MaxAndMum input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* #StrtBtnFnc {
    opacity: 0.5;
    pointer-events: none;
} */


/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}

#timV , #qnmV {
    pointer-events: none;
    background-color: #ccc;
}
#textEditor {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    border-radius: 4px;
  }
  
  #toolbar {
    margin-bottom: 5px;
    display: flex;
    gap:6px;
    background: linear-gradient(to bottom, #ddd 0%,#9ea7ac 100%); 
    padding: 10px;
    border-radius: 4px;
  }
  
  #textArea {
    width: 100%;
    border-radius: 4px;

    height: 300px;
    border: 1px solid #ccc;
    background-color: #fff;
  }
  
  .formatbtn {
    background-color: white;
    border-radius: 4px;
    border: 1px solid #000;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .formatbtn:focus {
    box-shadow: 0 0 5px 2px #2b9ed8;
  }
  .formatbtn:hover{
    box-shadow: 0 1px 2px #555;
    transition: cubic-bezier(0.19, 1, 0.22, 1);
  }
  .popup-essay-btns{
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-left: 20px;
  }
  .popup-essay-btns button {
    width: fit-content;
    border: 1px solid #000;
    border-radius: 4px;
    padding: 6px;
  }
