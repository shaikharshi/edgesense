import React from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Checkbox } from '../ui/checkbox'
import Link from 'next/link'
import RegisterForm from '../FormValidation'

const BlogForm = () => {
    return (
        <div className="bg-white sticky top-[150px]">
            <h2 className="h2 text-accent-color font-semibold">Let’s Talk !</h2>
            <p className="text-text-color">Maximize Efficiency</p>
            <RegisterForm />
        </div>
    )
}

export default BlogForm