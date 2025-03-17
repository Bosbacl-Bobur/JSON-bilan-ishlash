'use strict'
const API='https://jsonplaceholder.typicode.com/users'
const container=document.querySelector('.card')
fetch(API)
.then((data)=>{
    return data.json()
}).then((data)=>{
    data.forEach((user) => {
        // console.log(data);
        const card=document.createElement('div')
        card.classList.add('card')
        card.innerHTML=`
        <div class="profile-card">
                <img src="./banker.jpg" alt="">
                <h2>${user.name}</h2>
                <p class="job-title">${user.email}</p>
                <p class="job-title">${user.address}</p>
                <a target href='https:  ' class="website-link">Frontend Developer</a>
                <p class="location">🚏 San Francisco, Usa</p>
                <div class="buttons">
                    <button class="edit-btn">Edit</button>
                    <button class="follow-btn">Follow</button>
                </div>
            </div>
        `
        container.appendChild(card)
    });
})