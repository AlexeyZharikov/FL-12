const structure = [{
    'folder': true,
    'title': 'Films',
    'children': [{
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [{
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [{
      'folder': true,
      'title': 'EPAM Homework answers',
      'children': null
    }]
  }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here
function displayTree(data) {
  let htmlStr = "<ul class='folder-container'>";
  for (var key in data) {
    if (typeof data[key] === 'object') {
      htmlStr += displayTree(data[key]);
      htmlStr += '</ul></li>';
    } else if (data[key] === true) {

      htmlStr += "<ul class='folder-item'><i class='close_folder material-icons'>folder</i><span>" +
        data["title"] + "</span></ul>";
    } else if (key === 'title' && data['folder'] !== true) {
      htmlStr += "<li class='file-item'><i class='paper material-icons'>insert_drive_file</i><span>" +
        data['title'] + "</span></li>";
    }
  }
  return htmlStr;
}

rootNode.innerHTML = displayTree(structure);


let toggler = document.getElementsByClassName("folder-item");

for (let i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function () {
    this.parentElement.querySelector(".file-item").classList.toggle("active");
    // this.classList.toggle("active");
  });
}