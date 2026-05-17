import { Save, Trash2 } from 'lucide-react';
import React from 'react';

const ActionButton = () => {
    return (
        <div className="flex justify-end space-x-4 pt-4">
            <button
                type="button"
                className="flex items-center space-x-2 px-6 py-2.5 border border-red-400 text-red-500 hover:bg-red-50 transition-colors rounded-sm text-sm"
            >
                <Trash2 size={16} />
                <span>Cancel</span>
            </button>
            <button
                type="submit"
                className="flex items-center space-x-2 px-6 py-2.5 bg-[#109db9] text-white hover:bg-[#0e8ca5] transition-colors rounded-sm text-sm"
            >
                <Save size={16} />
                <span>Add Travel Package</span>
            </button>
        </div>
    );
};

export default ActionButton;