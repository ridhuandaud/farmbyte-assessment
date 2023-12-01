<?php

namespace App\Http\Controllers;

use App\Http\Requests\Tasks\StoreTaskRequest;
use App\Http\Requests\Tasks\UpdateTaskRequest;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * index
     *
     */
    public function index()
    {
        return Task::all();
    }

    /**
     * store
     *
     * @param StoreTaskRequest $request
     */
    public function store(StoreTaskRequest $request)
    {
        return Task::create($request->all());
    }

    /**
     * show
     *
     * @param Task $task
     */
    public function show(Task $task)
    {
        return $task;
    }

    /**
     * update
     *
     * @param UpdateTaskRequest $request
     * @param Task $task
     */
    public function update(UpdateTaskRequest $request, Task $task)
    {
        if ($task->update($request->all())) $task->fresh();
        return $task;
    }

    /**
     * destroy
     *
     * @param Task $task
     */
    public function destroy(Task $task)
    {
        return $task->delete();
    }
}
