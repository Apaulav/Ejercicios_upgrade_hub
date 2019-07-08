
// clase que hace la peticion al listado de albunes
class Albums {
    constructor() {
        this._albums = [];
    }


    fetchDataAlbums() {
          
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then( response => response.json())
            
    }
/*
    handlePhotosResponse(myAlbums) {
        this._albums = [];
        for(const data of myAlbums) {
            let albumsData = new AlbumPhotos(data.userId, data.id, data.title);
            this._albums.push(albumsData);
        }

        this.drawAllAlbums();
    }

    drawAllAlbums(){
        let table = document.querySelector("album-data");
        data.drawAllAlbums();
    }
 */
    drawUrl(album) {
        
        const albumWrapper = document.querySelector(".album-data");
        let html = "";
        album.forEach(url => {
            html += `
            <li class"url">
            <a href="#!" data-id="${url.id}">${url.title}</a>
            </li>
            `
        });
        albumWrapper.innerHTML = html;
       
    }

    // aca debe devolver el listado de fotos
    //hacer una peticion que contenga los fotos que estan dentro los albunes
    getPhotosByAlbumId(id){
        fetch("https://jsonplaceholder.typicode.com/photos?albumId=" + id)
        
        .then(response => response.json())
        .then(photos => this.drawPhotos(photos))
        

    }

    drawPhotos(photos){
        console.log(photos);
        const photoWrapper = document.querySelector("#album-photos");
        let html = "";
        
        photos.forEach(photo => {
            html += `
            <img src="${photo.url}" width="100%" />
            `
        });
        photoWrapper.innerHTML = html;
    }

}

/* class AlbumPhotos {
    constructor(userId, id, title) {
        this._userId = userId;
        this._id = id;
        this._title = title;
    }

    draw() {
        let albumRow = document.querySelector("tr");
        let contentRow = `
        <td>${this._userId}</td>
        <td>${this._id}</td>
        <td>${this._title}</td>
        <td><button id="SeeAlbum" class="my-button">Ver Album</button></td>
        `;
        albumRow.innerHTML = contentRow;

        albumRow.querySelector("#SeeAlbum").addEventListener("click", () => {
            this.fetchAlbumPhotos.draw();
        });

        let tableBody = document.querySelector("#album-data");
        tableBody.appendChild(albumRow);

    }

    fetchAlbumPhotos() {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((response) => {
                return response.json();
            })
            .then((photosResponse) => {
                this.handlePhotosResponse(photosResponse);
            });
    }

    handlePhotosResponse() {
        
    }

}
 */
let init = () => {
    let album = new Albums();
    album.fetchDataAlbums().then(
        a => {   
            album.drawUrl(album)
            let albumWrapper = document.querySelectorAll(".url a");
            console.log(albumWrapper)
            albumWrapper.forEach(item => {
            // e es el evento
            item.addEventListener("click", e => {
                e.preventDefault(); // esto hace que evento no haga su comportamiento por defecto
                
                const id = item.getAttribute("data-id")
                album.getPhotosByAlbumId(id);
                    })
            });
            
        }
        
    )

   
}



window.addEventListener("load", init)





