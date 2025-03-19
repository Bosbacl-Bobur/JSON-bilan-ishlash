export const API='https://jsonplaceholder.typicode.com/posts'
export const container=document.querySelector('.container') 
export const fetchPosts=async(resource,container)=>{
    try {
        const response=await fetch(resource)
       
    const [data]=await response.json()
    console.log(data);
    const card=document.createElement('div')
    card.innerHTML=`
        <div class="profile-card">
                <img src="./df.png" alt="">
                <h2>Id: ${data.id}</h2>
                <p class="job-title">Body: ${data.body}</p>
                <h4>Title: ${data.title}</h4>
                <p class="location">userId: ${data.userId}</p>
                <div class="buttons">
                    <button class="follow-btn">Follow</button>
                </div>
            </div>
        `
        container.appendChild(card)    
    } catch (error) {
        console.error('Xatolik',error.message)
    }
}