function skyBackgroundScroll() {

    const background = document.getElementById("scrollBackground");

    window.addEventListener("scroll", () => {
        let scrollY = window.scrollY;
        let newHeight = Math.max(0, 200 - scrollY);
        background.style.height = `${newHeight}px`;
    });
}
skyBackgroundScroll();