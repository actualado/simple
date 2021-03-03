


let searchBar = document.getElementById("search");
let searchButton = document.getElementById("search-button");
let leftSide = document.getElementById("feed-left-1");
let post_form_description = document.getElementById("post-form-description");
let post_form_image = document.getElementById("post-form-image");
let post_form_button = document.getElementById("post-form-button");
let id_card_name=document.getElementById("id-card-name");
let id_card_username=document.getElementById("id-card-username");
let id_card_picture=document.getElementById("id-card-image");
let suggestions= document.getElementById("suggestions");











let posts = [];
let users = [];



class User {
    constructor(name, picture, username, password) {
      this.name = name;
      this.picture = picture;
      this.following = [];
      this.followers =[];
      this.posts = [];
      this.username = username;
      this.password = password;
      
    }

    getProfilePicture(){
        return this.picture;
    }

    getUsername(){
        return this.username;
    }

    getPassword(){
        return this.password;
    }

    addPost(description, image) {
        let post = new Post(description, image, this);
        let postDiv = document.createElement("div");
        postDiv.className="post";
        
        leftSide.appendChild(postDiv);


        let post_header=document.createElement("div");
        post_header.className="post-header";
        postDiv.appendChild(post_header);

        let post_header_tag = document.createElement("h1");
        post_header_tag.innerHTML=this.getName();
        post_header.appendChild(post_header_tag);


        let image_div = document.createElement("div");
        image_div.className="post-img";
        postDiv.appendChild(image_div);


        let img = document.createElement("img");
        img.src=image;
        img.alt="Bad image link!";

        image_div.appendChild(img);


        let desc = document.createElement("div");
        desc.className="post-desc";
        let desc_p = document.createElement("p");
        desc_p.innerHTML=description;
        desc.appendChild(desc_p);
        postDiv.appendChild(desc);
        
        this.posts.push(post);
    }

    addFollower(follower){
        this.followers.push(follower);
        follower.following.push(this);
        
    }

    follow(someone){
        this.following.push(someone);
        someone.followers.push(this);
    }



    getFriends(){
        console.log(this.friends);
        return this.friends;

    }

    getPosts(){
        console.log(this.posts);
        return this.posts;
    }

    getName(){
        return this.name;
    }
  }

  

  class Post{
      constructor(description, user, imageURL){
        this.description=description;
        this.user=user;
        this.imageURL=imageURL;
      }

      getDescription(){
          console.log(this.description);
          return this.description;
      }
      getUser(){
          console.log(this.user);
          return this.user;
      }
      getImageURL(){
          console.log(this.imageURL);
          return this.imageURL;
      }

      editDescription(text){
          this.description=text;
      }

  }

  

let u1 = new User("Adnan Mujagic", "imgs/pic3.jpg", "adnan_mujagic","fjdasklj");
let loggedInUser = u1;
users.push(u1);

users.push(new User("Amar Mujagic","imgs/pic1.jpg","amar_mujagic","amarmujagic"));
users.push(new User("Ajla Smajić", "imgs/pic2.jpg", "ajla_smajic","ajlasmajicblajba"));
users.push(new User("Mirela Hadzic", "https://previews.123rf.com/images/annepunch/annepunch1810/annepunch181000305/109763471-black-handwritten-text-crazy-and-outline-of-crown-drawn-by-hand-on-pink-background-funny-girly-card-.jpg", "mirela_hadzic", "mirelasss"));

let u2 = new User("Adijan Muric","https://actionseaze.com/wp-content/uploads/2020/02/sunset.jpg","adijan_muric", "adijannnnnn");
u2.follow(u1);
users.push(u2);

  
  


//let logInButton = document.getElementById("login-button");
//let usernameField = document.getElementById("login-username");
//let passwordField = document.getElementById("login-password");



//if(window.location.href=="login.html"){
//   logInButton.addEventListener("click", function(){
//      for(user of users){
//           if(user.getUsername()==usernameField.value){
//               if(user.getPassword()==passwordField.value){
 //                   loggedInUser=user;
  //                  window.location.href="index.html";
 //               }
 //               else{
 //                   console.log("Good username, bad password")
 //               }
 //           }
 //           else{
 //               console.log("Bad username!");
 //           }
 //       }
 //       
 //   })
//}




    post_form_button.addEventListener("click", function(){
        loggedInUser.addPost(loggedInUser.getName()+":"+post_form_description.value, post_form_image.value, loggedInUser);
        post_form_description.value="";
        post_form_image.value="";
    });
  


    //here we try to set up the id card to fit the logged in user

    function generateIdCard(){
        id_card_picture.src=loggedInUser.getProfilePicture();
        id_card_username.innerHTML=loggedInUser.getUsername();
        id_card_name.innerHTML=loggedInUser.getName();
    }
    function generateSuggestions(){
        for(let x = 0; x<users.length && x<5; x++){
            let user = users[x];
            if(user!=loggedInUser){
                let suggestion = document.createElement("div");
            suggestion.className = "suggestion";
            
            suggestions.appendChild(suggestion);
            let suggestion_left = document.createElement("div");
            suggestion_left.className="suggestion-left";
            suggestion.appendChild(suggestion_left);
            let suggestion_img = document.createElement("img");
            suggestion_img.src=user.getProfilePicture();
            suggestion_left.appendChild(suggestion_img);

            let suggestion_right = document.createElement("div");
            suggestion_right.className="suggestion-right";
            suggestion_right.innerHTML=user.getName();

            suggestion.appendChild(suggestion_right);

            console.log(user);
            }
            
            

            

            
        }
    }

    


    
    generateSuggestions();
    generateIdCard();



    

    












  
  