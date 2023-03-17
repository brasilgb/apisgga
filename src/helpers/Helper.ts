
import bcrypt from 'bcrypt';

const ResponseData = (status: number, message: string | null, error: any | null, data: any | null) => {
    if (error != null && error instanceof Error) {
        const response = {
            status: status,
            message: error.message,
            errors: error,
            data: null
        }

        return response;
    }

    const res = {
        status,
        message,
        errors: error,
        data: data
    }

    return res;
};

const PasswordHashing = async (password: string): Promise<string> => {
    const result = await bcrypt.hash(password, 10);
    return result;
};

const PasswordCompare = async (password: string, passwordHash: string): Promise<boolean> => {
    const matched = await bcrypt.compare(password, passwordHash);
    return matched;
};

export default { ResponseData, PasswordHashing, PasswordCompare };
