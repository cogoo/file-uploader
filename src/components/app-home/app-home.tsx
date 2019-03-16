import { Component, State } from '@stencil/core';
import env from '../../../.env.js';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  textInput!: HTMLInputElement;
  bucketName: string = env.GCS_BUCKET;

  @State() uploading: boolean = false;

  uploadFile() {
    this.textInput.click();
  }

  async handleChange() {
    const file = this.textInput.files[0];
    if (!file.type.match(/(?:audio)|(?:video)/)) {
      alert('Only audio and video files allowed');
      return;
    }

    this.uploading = true;

    try {
      const postURL = `https://www.googleapis.com/upload/storage/v1/b/${
        this.bucketName
      }/o?uploadType=media&name=${file.name}`;

      await fetch(postURL, {
        method: 'POST',
        body: file,
      });
      alert('File uploaded successfully');
    } catch (error) {
      alert('There was an error with your file upload');
    }
    this.uploading = false;
  }

  render() {
    return (
      <div class="app-home">
        <h1>Upload File.</h1>

        <p>Video or audio files supported.</p>

        {!this.uploading && (
          <button
            class="btn btn--secondary btn--round app-home__btn"
            onClick={() => this.uploadFile()}>
            <svg
              class="app-home__add-icon"
              viewBox="0 0 80 80"
              fill="#ffffff"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M40 5.4C20.9 5.4 5.4 20.9 5.4 40s15.5 34.6 34.5 34.6S74.5 59.1 74.6 40C74.5 20.9 59.1 5.5 40 5.4zm0 66.2C22.6 71.6 8.4 57.4 8.4 40 8.4 22.6 22.6 8.4 40 8.4c17.4 0 31.6 14.1 31.6 31.5-.1 17.5-14.2 31.6-31.6 31.7z" />
              <path d="M40 14.9v3c12.2 0 22 9.9 22.1 22.1h3c0-13.8-11.3-25-25.1-25.1zM41.5 25.5h-3v13h-13v3h13v13h3v-13h13v-3h-13z" />
            </svg>
            Add file
          </button>
        )}

        {this.uploading && <app-uploading />}

        <input
          class="hidden"
          type="file"
          ref={(el) => (this.textInput = el as HTMLInputElement)}
          onInput={() => this.handleChange()}
        />

        <img src="assets/img/illu.png" alt="People pointing illustration"/>
      </div>
    );
  }
}
