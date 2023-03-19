const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')


item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend );

for (const placeholder of placeholders){
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', drop)
}

function dragstart(element){
    element.target.classList.add('hold')
    setTimeout(function () {
        element.target.classList.add('hide')
    }, 0)

}

function dragend(element) {
    element.target.classList.remove('hold', 'hide')
}

function dragover (element){
    element.preventDefault();
}
function dragenter (element){
    element.target.classList.add('hovered')
}
function dragleave (element){
    element.target.classList.remove('hovered')
}
function drop (element){
    element.target.append(item);
    element.target.classList.remove('hovered')
}