// 新規記録画面に移動
function goToRecordInput() {
    window.location.href = "record_input.html";
}

// 記録を読み込み表示する関数
document.addEventListener("DOMContentLoaded", () => {
    const recordList = document.getElementById("record-list");
    if (recordList) {
        const records = JSON.parse(localStorage.getItem("records")) || [];

        if (records.length === 0) {
            recordList.innerHTML = "<p>まだ記録がありません。</p>";
            return;
        }

        // 記録データをリストに追加
        records.forEach((record, index) => {
            const recordItem = document.createElement("div");
            recordItem.classList.add("record-item");

            recordItem.innerHTML = `
                <div>
                    <strong>場所:</strong> ${record.location}<br>
                    <strong>開始時間:</strong> ${record.startTime}<br>
                    <strong>掃除時間:</strong> ${record.duration}<br>
                    <strong>コメント:</strong> ${record.comment || "なし"}
                </div>
                <button class="delete-button" data-index="${index}">削除</button>
            `;

            recordList.appendChild(recordItem);
        });

        // 削除ボタンのイベントリスナーを追加
        document.querySelectorAll(".delete-button").forEach(button => {
            button.addEventListener("click", (e) => {
                const index = e.target.getAttribute("data-index");
                deleteRecord(index);
            });
        });
    }
});

// 記録を削除する関数
function deleteRecord(index) {
    const records = JSON.parse(localStorage.getItem("records")) || [];
    records.splice(index, 1); // 指定インデックスの記録を削除
    localStorage.setItem("records", JSON.stringify(records)); // 更新
    window.location.reload(); // ページをリロードして反映
}
