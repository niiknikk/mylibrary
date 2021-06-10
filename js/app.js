const book = [
  {
      id: 1,
      title: "80/20 Freelancing",
      name: "kyle prinsloo",
      category: "Freelance",
      link:"https://gumroad.com/l/8020freelancing/",
      img: "./img/80_20freelance.jpg",

  },
 
  {
      id: 2,
      title: "CSS Cheat Sheets",
      name:"Pratham",
      category: "Development",
      link:"https://gumroad.com/l/css-cheat",
      img: "./img/pratham.jpg",
  },
  {
      id: 3,
      title:"JavaScript Code Snippets",
      name: "Simon Høiberg",
      category: "Development",
      link:"https://gumroad.com/l/65-js-codesnippets",
      img: "./img/code-snippets.jpg",
  },
  {
      id: 4,
      title: "Pyjama Profit:",
      name:"Varun Mayya",
      category: "Freelance",
      link:"https://read.amazon.in/kp/embed?asin=B07DLJJG4K&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_J66DGS72YM0JDR6ADPJY",
      img: "./img/pyjama-profit.jpg",
  },
  {
      id: 5,
      title: "The 4-Hour Work Week",
      name:"Timothy Ferriss",
      category: "Freelance",
      link:"https://read.amazon.in/kp/embed?asin=B006X0M2TS&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_319EMKPYT5BHMMYZPWA8",
      img: "./img/4hrworkweek.webp",
  },
  {
      id: 6,
      title: "The Art of Twitter",
      name:"Harsh Strongmen",
      category: "Self-Help",
      link:"https://gumroad.com/lifemathmoney#XFFpt",
      img: "./img/the-art-of-twitter.jpg",
  },
  
  {
      id: 7,
      title: "Rework",
      name:"David Heinemeier Hansson",
      category: "Self-Help",
      link:"https://read.amazon.in/kp/embed?asin=B003ELY7PG&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_0GFRSVQ2W1YGFF4PQS7T",
      img: "./img/rework.jpg",
  },
  {
      id: 8,
      title: "Atomic Habits",
      name:"James Clear",
      category: "Self-Help",
      link:"https://read.amazon.in/kp/embed?asin=B01N5AX61W&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_7EPGFV7GX8TXPHB4AVN9",
      img: "./img/atomic-habbits.jpg",
  },
  {
      id: 9,
      title: "Harsh Strongmen",
      name:"Live Intentionally",
      category: "Self-Help",
      link:"https://gumroad.com/lifemathmoney#vrvFg",
      img: "./img/live-intentionally.jpg",
  },
  {
      id: 10,
      title: "Developer Wisdom",
      category: "Development",
      name:"Sunil Kumar",
      link:"https://gumroad.com/sunilkumarc#joCkt",
      img: "./img/developer-wishdom.png",
  },
  {
      id: 11,
      title: "The Alchemist",
      category: "Development",
      name:"Paulo Coelho",
      link:"https://www.amazon.in/Alchemist-Paulo-Coelho/dp/8172234988",
      img: "/img/the-alchemist.jpg",
  },

  {
    id: 12,
    title: "Web Developer Knowledge",
    category: "Development",
    name:"Vlad Pasca",
    link:"https://gumroad.com/vladpasca5#LIEAN",
    img: "./img/web-developer-knowledge.jpg",
},
  {
    id: 13,
    title: "Pricing Freelance Project",
    category: "Freelance",
    name:"Tom Hirst",
    link:"https://gumroad.com/tom_hirst#pcUlz",
    img: "./img/pricing-freelance-projects.png",
},

{
    id: 14,
    title: "SEO Side Hustle",
    category: "SEO",
    name:"Charles Floate",
    link:"https://gumroad.com/l/seo-side-hustle",
    img: "https://public-files.gumroad.com/variants/80998vx129v9fpww8q3ioqzwcnpt/3298c3eb001bbed90f1d616da66708480096a0a1b6e81bd4f8a2d6e9b831d301",
},
{
    id: 15,
    title: "Your Path to Web Dev Freelancing",
    name: "Blake Lower",
    category: "Freelance",
    link:"https://gumroad.com/l/PtDqg",
    img: "https://public-files.gumroad.com/variants/aq59ac6g0wwp61txduz7m20tynvk/3298c3eb001bbed90f1d616da66708480096a0a1b6e81bd4f8a2d6e9b831d301",

},

];

const container = document.querySelector('.gallery-container');
const btnContainer = document.querySelector('.gallery-button');


window.addEventListener('DOMContentLoaded', () => {
    displayFunction(book);
    displayButton();
});

let displayFunction = function (book) {
    let displaybook = book.map((book) => {
        return `<div class="gallery-card">
        <img src=${book.img} alt=${book.title} class="gallery-img">
        <div class="card-content">
            <div class="card-info">
                <h3 class="card-title">${book.title}</h3>
                <small class="card-name">${book.name}</small>
            </div>
                <a href="${book.link}"><img src="./img/cart.png" alt=""></a>
        </div>
    </div>`;
    });
    displaybook = displaybook.join('');
    container.innerHTML = displaybook;
}

let displayButton = function () {
    let category = book.reduce((values, items) => {
        if (!values.includes(items.category)) {
            values.push(items.category);
        }
        return values
    }, ['All']);
    let categoryBtn = category.map((category) => {
        return `<button class="gallery-btn" data-id=${category}>${category}</button>`;
    }).join('');
    
    
    btnContainer.innerHTML = categoryBtn;

    const filterBtn = btnContainer.querySelectorAll('.gallery-btn');

    filterBtn.forEach((btn) => {
        btn.addEventListener("click", () => {
          const category = btn.dataset.id;
          const bookCategory = book.filter((bookItem) => {
              if (bookItem.category == category) {
              return bookItem;
            }
          });
            if (category == 'All') {
              displayFunction(book)
            } else {
              displayFunction(bookCategory);
            }
        });
      });
     
}