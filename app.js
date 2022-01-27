
const getBad = async () => {
  const url = "https://www.breakingbadapi.com/api/characters";
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  const info = document.querySelector("#info");
  let details = data.map((user) => {
    return `<div class='user'>
    <img class="pic" src =${user.img} alt="" />
    <p class ="names">
    
        <span><b>Name:${user.name}</b></span>
        
        <span><b>nickname:${user.nickname}</b></span>
        <span><b>category:${user.category}</b></span>
        <span><b>occupation:${user.occupation}</b></span>
        </p>
        
    </div>`;
  });
  info.innerHTML = details.join("\n");
};
getBad();
