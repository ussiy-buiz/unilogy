// record.html: 新規記録画面への遷移
function goToRecordInput() {
    window.location.href = "record_input.html";
}

// record_input.html: 記録を投稿してrecord.htmlに保存
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("record-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            // 入力内容を取得
            const location = document.getElementById("location").value;
            const comment = document.getElementById("comment").value;

            // ローカルストレージに保存
            const records = JSON.parse(localStorage.getItem("records")) || [];
            records.push({ location, comment });
            localStorage.setItem("records", JSON.stringify(records));

            // 記録ページに戻る
            window.location.href = "record.html";
        });
    }
});



// record.html: 記録を表示し削除ボタンを追加
document.addEventListener("DOMContentLoaded", () => {
    const recordList = document.getElementById("record-list");
    if (recordList) {
        const records = JSON.parse(localStorage.getItem("records")) || [];
        records.forEach((record, index) => {
            const recordItem = document.createElement("div");
            recordItem.classList.add("record-item");
            recordItem.innerHTML = `
                <strong>${record.location}</strong><br>
                ${record.comment}
                <button class="delete-button" data-index="${index}">削除</button>
            `;
            recordList.appendChild(recordItem);
        });

        // 削除ボタンのイベントリスナーを設定
        const deleteButtons = document.querySelectorAll(".delete-button");
        deleteButtons.forEach(button => {
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
    records.splice(index, 1); // 指定したインデックスの記録を削除
    localStorage.setItem("records", JSON.stringify(records)); // 更新
    window.location.reload(); // ページをリロードして更新後のリストを表示
}


