<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function createAccount(Request $request)
    {
        $user = new User;
        $user->username = $request->username;
        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json(['message' => 'Akun berhasil dibuat!']);
    }
}
