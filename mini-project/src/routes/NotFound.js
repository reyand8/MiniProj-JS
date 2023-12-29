import React from 'react';
import { Button, Result } from 'antd';
import {Link} from 'react-router-dom';


export default function NotFunction() {
    return (
        <Result
            status="warning"
            title="Not found"
            extra={
                <Button key="console">
                    <Link to="/">Go Back</Link>
                </Button>
            }
        />
    );
}