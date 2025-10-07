// Start of Vedio 24
import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
// if we want to use Editor only we can use it as <Editor /> and pass it's props as <Editor initialValue='default value' />
// but we want this as a component and pass it's refernce to where ever it is used
// we can use forwardRef to pass the reference but we need to import controller also 
import { Controller } from 'react-hook-form'
// using Controller we can pass the control to the parent component same as using forwardRef 

const RTE = ({name, control, label, defaultValue=""}) => {
    // control in the props come from react-hook-form which is responible for passing the reference from the component (RTE) to the form where ever it is used
    return (
    <div className='w-full'>
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    {/* we can pass name, control, rules and render to Controller below */}
    {/* control will be called by parent component which will give controll to parent element (data, state and more) */}
    {/* in render we have a callback props, everything in render callback is called field which will be tracked, and we can assign anything like hooks API and more (here we want to add onChange), */}
    {/* onChange will tell us whatever gets changed in the field  */}
    {/* in the callback whatever render will be render, we can render input, Editor and more, here we want to render Editor */}

    <Controller 
        name={name || "Content"}
        control={control}
        render={({field: {onChange}}) => (
          <Editor 
          apiKey="hhh4ncurqza9cfwr2iacxr67myf9tljtzjm9ma8e8jh9hjca" // ⬅️ Add this line, get this apiKey from https://www.tiny.cloud/my-account/integrate/#react after loging in
          initialValue = {defaultValue}
          init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
              'image',
              'advlist',
              'autolink',
              'lists',
              'link',
              'image',
              'charmap',
              'preview',
              'anchor',
              'searchreplace',
              'visulablocks',
              'code',
              'fullscreen',
              'insertdatetime',
              'media',
              'table',
              'code',
              'help',
              'wordcount',
              'anchor',
            ],
            toolbar: 
            'undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alighjustify | bullist numlist outdent indent | removeformat | help', content_style: "body { font-family:Helvetica, Arial, sans-serif; font-size:14px }"
          }}
          onEditorChange={onChange}
          />
        )}
    />

    </div>
  )
}

export default RTE