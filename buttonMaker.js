function applyStyle() {
    let bg_color = document.getElementById("bgColorInput").value;
    let font_color = document.getElementById("fontColorInput").value;
    let font_size = document.getElementById("fontSizeInput").value;
    let font_weight = document.getElementById("fontWeightInput").value;
    let padding = document.getElementById("paddingInput").value;
    let border_radius = document.getElementById("borderRadiusInput").value;

    let custom_btn = document.getElementById("customButton");
    custom_btn.style.backgroundColor = bg_color;
    custom_btn.style.color = font_color;
    custom_btn.style.fontSize = font_size;
    custom_btn.style.fontWeight = font_weight;
    custom_btn.style.padding = padding;
    custom_btn.style.borderRadius = border_radius;

}