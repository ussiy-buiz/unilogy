document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // タブを切り替え
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            // 対応するコンテンツを表示
            const target = tab.dataset.tab;
            contents.forEach(content => {
                content.classList.toggle("active", content.id === target);
            });
        });
    });
});
