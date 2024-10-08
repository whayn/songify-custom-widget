# Songify Custom Widget

This project is a custom widget that integrates with the [Songify](https://github.com/songify-rocks/Songify) web server. The widget displays current song information and can be embedded into OBS or other broadcasting software as a browser source.

> [!WARNING]  
>  This project is **Windows only**

## Requirements

- **Songify**: Ensure that Songify is installed and its integrated web server is turned on and properly configured. For more information on configuring the Songify web server, see the [Settings Window - Web Server](https://github.com/songify-rocks/Songify/wiki/Settings-Window#web-server) section of the Songify wiki.

## Installing and running

To run the application, follow these steps:

1. Open the Songify application.
2. Go to the **Settings Window** and enable the **Web Server**.

   For detailed instructions, please refer to the [Songify Web Server Settings](https://github.com/songify-rocks/Songify/wiki/Settings-Window#web-server).

3. Grab the latest release of the widget from the [Releases](https://github.com/whayn/songify-custom-widget/releases) (select `songify-widget-v*.*.*.zip`).
4. Extract the contents of the ZIP file to a folder on your computer (somewhere that you can remember, such as your Document folder).
5. Double-click on the `start-widget.bat` file (or `start-widget-non-headless.bat`).
6. If Node.js is not installed, the batch file will prompt you to install it. Follow the instructions to install Node.js from [nodejs.org](https://nodejs.org/).
7. After starting the application, a tray icon will appear in the system tray.
8. Right-click the tray icon and select **Open Widget** to open the widget in your default browser.
9. Add the widget URL to OBS or another broadcasting software as a browser source to display the widget in your stream.

> [!NOTE]  
>  To close the widget, right-click the tray icon and select **Exit**.

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

- [x] Make the server run headless
- [ ] Add refresh timings configuration

## Contributing

Pull requests are welcome! If you have any improvements, bug fixes, or new features to add, feel free to submit a pull request!

Thank you for contributing to the project!

---

### Acknowledgments

- Logo and Graphics: The logo is a slightly edited version of the Songify logo, so it is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).

## License

**Songify Custom Widget** by **Whayn** is licensed under [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).
