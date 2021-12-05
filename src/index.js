document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    let li = document.createElement('li')
    li.textContent = e.target['new-task-description'].value
    document.getElementById('tasks').appendChild(li)
  })
})
