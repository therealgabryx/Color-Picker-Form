function color() {
    const backgrcolor = colorForm.backgrcolor.value
    console.log('backgrcolor' + backgrcolor)

    const textcolor = colorForm.textcolor.value
    console.log('textcolor' + textcolor)

    document.getElementById('exampleText').style.backgroundColor = backgrcolor;
    document.getElementById('exampleText').style.color = textcolor;
}