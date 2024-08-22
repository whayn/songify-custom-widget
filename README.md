# Songify Custom Widget

This project is a custom widget that integrates with the [Songify](https://github.com/songify-rocks/Songify) web server. The widget displays current song information and can be embedded into OBS or other broadcasting software as a browser source.

> [!WARNING]  
>  This project is **Windows only**

## Requirements

- **Songify**: Ensure that Songify is installed and its integrated web server is turned on and properly configured. For more information on configuring the Songify web server, see the [Settings Window - Web Server](https://github.com/songify-rocks/Songify/wiki/Settings-Window#web-server) section of the Songify wiki.

## Installation

### Step 1: Configure the Songify Web Server

1. Open the Songify application.
2. Go to the **Settings Window** and enable the **Web Server**.

   For detailed instructions, please refer to the [Songify Web Server Settings](https://github.com/songify-rocks/Songify/wiki/Settings-Window#web-server).

## Running for production

To run the application in production mode, follow these steps:

1. Open the Songify application.
2. Go to the **Settings Window** and enable the **Web Server**.

   For detailed instructions, please refer to the [Songify Web Server Settings](https://github.com/songify-rocks/Songify/wiki/Settings-Window#web-server).

3. Double-click on the `start-widget.bat` file.
4. If Node.js is not installed, the batch file will prompt you to install it. Follow the instructions to install Node.js from [nodejs.org](https://nodejs.org/).
5. After starting the application, a tray icon will appear in the system tray.
6. Right-click the tray icon and select **Open Widget** to open the widget in your default browser.
7. Add the widget URL to OBS or another broadcasting software as a browser source to display the widget in your stream.

## Running for Development

To run the application in development mode:

1. Ensure that Node.js and npm are installed on your machine.
2. Open a terminal in the root directory of the project.
3. Run the following command to start the development server:

   ```bash
   npm run dev
   ```

4. The development server will start, and you can make changes to the widget and see them in real-time.

---

## TODO

- [ ] Make the server run headless
- [ ] Add refresh timings configuration

## Contributing

Pull requests are welcome! If you have any improvements, bug fixes, or new features to add, feel free to submit a pull request!

Thank you for contributing to the project!

---

### Acknowledgments

- Logo and Graphics: The logo is a slightly edited version of the Songify logo, so it is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).

## License

**Songify Custom Widget** by **Whayn** is licensed under [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).
