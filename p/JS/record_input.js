// 新規記録画面への遷移
function goToRecordInput() {
    window.location.href = "record_input.html";
}

// 記録を保存して記録ページに移動
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("record-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // フォーム送信を防ぐ

            // 入力内容を取得
            const location = document.getElementById("location").value;
            const startTime = document.getElementById("start-time").value || "未設定";
            const hours = document.getElementById("hours-picker")?.value || "0";
            const minutes = document.getElementById("minutes-picker")?.value || "0";
            const duration = `${hours} 時間 ${minutes} 分`;
            const comment = document.getElementById("comment").value;

            // ローカルストレージに保存
            const records = JSON.parse(localStorage.getItem("records")) || [];
            records.push({ location, startTime, duration, comment });
            localStorage.setItem("records", JSON.stringify(records));

            // 記録ページに戻る
            window.location.href = "record.html";
        });
    }
});
