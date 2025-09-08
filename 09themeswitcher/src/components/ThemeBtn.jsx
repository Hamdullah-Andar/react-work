import React from 'react'
import useTheme from '../contexts/theme';

export default function ThemeBtn() {

    const {themeMode, lightTheme, darkTheme} = useTheme()
    console.log("Theme Mode : ", themeMode)

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if(darkModeStatus){
            darkTheme()
        } else {
            lightTheme()
        }
    }
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode === "dark"}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}


// We have destructure {themeMode, lightTheme, darkTheme} from useTheme()
// And we have to add checked value and make themeMode value to dark here 
// And we have to add onChange and pass a onChangeBtn reference and define it above 
// In onChangeBtn we have to take current status of checkbox, if it is true as we have assign to it we will darkTheme() else we will lightTheme()

// but still the is not aware of all these change, we have to tell the card also about these changes

